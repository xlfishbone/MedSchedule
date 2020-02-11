import base64
from hashlib import sha256

from flask import Flask
from flask import jsonify

app = Flask(__name__)


@app.route('/hash/<string:ptext>', methods=['GET'])
def hello_world(ptext):
    return jsonify(hashCode=hash_text(ptext))


def hash_text(plain_text):
    hashedBytes = sha256(plain_text.encode()).digest()
    encoded = base64.b64encode(hashedBytes)
    return encoded


if __name__ == '__main__':
    app.run()
