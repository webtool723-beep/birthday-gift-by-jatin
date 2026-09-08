import urllib.request
import ssl

print("Downloading mock assets...")
ssl._create_default_https_context = ssl._create_unverified_context
try:
    urllib.request.urlretrieve("https://picsum.photos/1200/800?random=1", "assets/photo1.jpg")
    urllib.request.urlretrieve("https://picsum.photos/1200/800?random=2", "assets/photo2.jpg")
    urllib.request.urlretrieve("https://picsum.photos/1200/800?random=3", "assets/photo3.jpg")
    urllib.request.urlretrieve("https://picsum.photos/1200/800?random=4", "assets/photo4.jpg")
    urllib.request.urlretrieve("https://upload.wikimedia.org/wikipedia/commons/d/d0/Kevin_MacLeod_-_Gymnopedie_No_1.ogg", "assets/music.ogg")
    print("Download complete!")
except Exception as e:
    print(f"Error: {e}")
