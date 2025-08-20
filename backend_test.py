#!/usr/bin/env python3
"""
TeraBox Backend API Testing Suite
Tests all authentication and file management endpoints
"""

import requests
import json
import os
import tempfile
from pathlib import Path
import time

# Get backend URL from frontend .env file
def get_backend_url():
    frontend_env_path = Path("/app/frontend/.env")
    if frontend_env_path.exists():
        with open(frontend_env_path, 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    return "http://localhost:8001"

BASE_URL = get_backend_url()
API_BASE = f"{BASE_URL}/api"

class TeraBoxAPITester:
    def __init__(self):
        self.session = requests.Session()
        self.access_token = None
        self.user_data = None
        self.uploaded_files = []
        
    def test_auth_register(self):
        """Test user registration endpoint"""
        print("🔐 Testing user registration...")
        
        # Use realistic test data
        test_user = {
            "name": "Sarah Johnson",
            "email": f"sarah.johnson.{int(time.time())}@example.com",
            "password": "SecurePass123!"
        }
        
        try:
            response = self.session.post(f"{API_BASE}/auth/register", json=test_user)
            print(f"Registration response status: {response.status_code}")
            print(f"Registration response: {response.text}")
            
            if response.status_code == 200:
                data = response.json()
                print("✅ User registration successful")
                print(f"User ID: {data.get('user_id')}")
                self.test_user = test_user  # Store for login
                return True
            else:
                print(f"❌ Registration failed: {response.text}")
                return False
                
        except Exception as e:
            print(f"❌ Registration error: {str(e)}")
            return False
    
    def test_auth_login(self):
        """Test user login endpoint"""
        print("\n🔐 Testing user login...")
        
        if not hasattr(self, 'test_user'):
            print("❌ No test user available for login")
            return False
            
        login_data = {
            "email": self.test_user["email"],
            "password": self.test_user["password"]
        }
        
        try:
            response = self.session.post(f"{API_BASE}/auth/login", json=login_data)
            print(f"Login response status: {response.status_code}")
            print(f"Login response: {response.text}")
            
            if response.status_code == 200:
                data = response.json()
                self.access_token = data.get("access_token")
                self.user_data = data.get("user")
                
                # Set authorization header for future requests
                self.session.headers.update({
                    "Authorization": f"Bearer {self.access_token}"
                })
                
                print("✅ User login successful")
                print(f"Access token received: {self.access_token[:20]}...")
                print(f"User info: {self.user_data}")
                return True
            else:
                print(f"❌ Login failed: {response.text}")
                return False
                
        except Exception as e:
            print(f"❌ Login error: {str(e)}")
            return False
    
    def test_auth_me(self):
        """Test get current user info endpoint"""
        print("\n🔐 Testing get current user info...")
        
        if not self.access_token:
            print("❌ No access token available")
            return False
            
        try:
            response = self.session.get(f"{API_BASE}/auth/me")
            print(f"Get user info response status: {response.status_code}")
            print(f"Get user info response: {response.text}")
            
            if response.status_code == 200:
                data = response.json()
                print("✅ Get current user info successful")
                print(f"User details: {data}")
                return True
            else:
                print(f"❌ Get user info failed: {response.text}")
                return False
                
        except Exception as e:
            print(f"❌ Get user info error: {str(e)}")
            return False
    
    def test_file_upload(self):
        """Test file upload endpoint"""
        print("\n📁 Testing file upload...")
        
        if not self.access_token:
            print("❌ No access token available")
            return False
            
        # Create a test file
        test_content = "This is a test file for TeraBox upload functionality.\nCreated for API testing purposes."
        
        try:
            with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as temp_file:
                temp_file.write(test_content)
                temp_file_path = temp_file.name
            
            with open(temp_file_path, 'rb') as f:
                files = {
                    'file': ('test_document.txt', f, 'text/plain')
                }
                
                response = self.session.post(f"{API_BASE}/files/upload", files=files)
                print(f"File upload response status: {response.status_code}")
                print(f"File upload response: {response.text}")
                
                if response.status_code == 200:
                    data = response.json()
                    file_id = data.get("file_id")
                    self.uploaded_files.append(file_id)
                    print("✅ File upload successful")
                    print(f"File ID: {file_id}")
                    print(f"Filename: {data.get('filename')}")
                    return True
                else:
                    print(f"❌ File upload failed: {response.text}")
                    return False
                    
        except Exception as e:
            print(f"❌ File upload error: {str(e)}")
            return False
        finally:
            # Clean up temp file
            try:
                os.unlink(temp_file_path)
            except:
                pass
    
    def test_get_files(self):
        """Test get user files endpoint"""
        print("\n📁 Testing get user files...")
        
        if not self.access_token:
            print("❌ No access token available")
            return False
            
        try:
            response = self.session.get(f"{API_BASE}/files")
            print(f"Get files response status: {response.status_code}")
            print(f"Get files response: {response.text}")
            
            if response.status_code == 200:
                data = response.json()
                print("✅ Get user files successful")
                print(f"Number of files: {len(data)}")
                if data:
                    print(f"First file: {data[0]}")
                return True
            else:
                print(f"❌ Get files failed: {response.text}")
                return False
                
        except Exception as e:
            print(f"❌ Get files error: {str(e)}")
            return False
    
    def test_file_download(self):
        """Test file download endpoint"""
        print("\n📁 Testing file download...")
        
        if not self.access_token or not self.uploaded_files:
            print("❌ No access token or uploaded files available")
            return False
            
        file_id = self.uploaded_files[0]
        
        try:
            response = self.session.get(f"{API_BASE}/files/{file_id}/download")
            print(f"File download response status: {response.status_code}")
            
            if response.status_code == 200:
                print("✅ File download successful")
                print(f"Content type: {response.headers.get('content-type')}")
                print(f"Content length: {len(response.content)} bytes")
                return True
            else:
                print(f"❌ File download failed: {response.text}")
                return False
                
        except Exception as e:
            print(f"❌ File download error: {str(e)}")
            return False
    
    def test_dashboard_stats(self):
        """Test dashboard stats endpoint"""
        print("\n📊 Testing dashboard stats...")
        
        if not self.access_token:
            print("❌ No access token available")
            return False
            
        try:
            response = self.session.get(f"{API_BASE}/dashboard/stats")
            print(f"Dashboard stats response status: {response.status_code}")
            print(f"Dashboard stats response: {response.text}")
            
            if response.status_code == 200:
                data = response.json()
                print("✅ Dashboard stats successful")
                print(f"Stats: {data}")
                return True
            else:
                print(f"❌ Dashboard stats failed: {response.text}")
                return False
                
        except Exception as e:
            print(f"❌ Dashboard stats error: {str(e)}")
            return False
    
    def test_file_delete(self):
        """Test file delete endpoint"""
        print("\n📁 Testing file delete...")
        
        if not self.access_token or not self.uploaded_files:
            print("❌ No access token or uploaded files available")
            return False
            
        file_id = self.uploaded_files[0]
        
        try:
            response = self.session.delete(f"{API_BASE}/files/{file_id}")
            print(f"File delete response status: {response.status_code}")
            print(f"File delete response: {response.text}")
            
            if response.status_code == 200:
                print("✅ File delete successful")
                self.uploaded_files.remove(file_id)
                return True
            else:
                print(f"❌ File delete failed: {response.text}")
                return False
                
        except Exception as e:
            print(f"❌ File delete error: {str(e)}")
            return False
    
    def run_complete_test_suite(self):
        """Run the complete test suite in order"""
        print(f"🚀 Starting TeraBox API Test Suite")
        print(f"Backend URL: {BASE_URL}")
        print(f"API Base URL: {API_BASE}")
        print("=" * 60)
        
        results = {}
        
        # Test authentication flow
        results['register'] = self.test_auth_register()
        results['login'] = self.test_auth_login()
        results['me'] = self.test_auth_me()
        
        # Test file management flow
        results['upload'] = self.test_file_upload()
        results['get_files'] = self.test_get_files()
        results['download'] = self.test_file_download()
        results['dashboard'] = self.test_dashboard_stats()
        results['delete'] = self.test_file_delete()
        
        # Summary
        print("\n" + "=" * 60)
        print("📋 TEST RESULTS SUMMARY")
        print("=" * 60)
        
        passed = sum(1 for result in results.values() if result)
        total = len(results)
        
        for test_name, result in results.items():
            status = "✅ PASS" if result else "❌ FAIL"
            print(f"{test_name.upper():<15} {status}")
        
        print(f"\nOverall: {passed}/{total} tests passed")
        
        if passed == total:
            print("🎉 All tests passed! TeraBox API is working correctly.")
        else:
            print("⚠️  Some tests failed. Please check the detailed output above.")
        
        return results

def main():
    """Main function to run the test suite"""
    tester = TeraBoxAPITester()
    return tester.run_complete_test_suite()

if __name__ == "__main__":
    main()