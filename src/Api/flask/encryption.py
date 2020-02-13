import base64
from hashlib import sha256


def hash_text(plain_text):
    '''
        Pass in plain text and receive a hashed base64 encoded versino back
    '''
    hashed_bytes = sha256(plain_text.encode()).digest()
    encoded = base64.b64encode(hashed_bytes)
    return encoded
