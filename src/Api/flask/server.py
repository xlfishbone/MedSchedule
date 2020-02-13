from os import environ as env

from flask import Flask, request, jsonify, _request_ctx_stack
from flask_cors import cross_origin
from flask_sqlalchemy import SQLAlchemy

from auth_error import AuthError
from autho_security import requires_scope, requires_auth
from env_utils import set_up_env, env
from models import db

# ensure we have correct env variables
set_up_env()

medSched = Flask(__name__)
medSched.config['SQLALCHEMY_DATABASE_URI'] = env.get('DB_CONN')
db.init_app(medSched)


@medSched.errorhandler(AuthError)
def handle_auth_error(ex):
    response = jsonify(ex.error)
    response.status_code = ex.status_code
    return response


# Controllers API
@medSched.route("/api/public")
@cross_origin(headers=["Content-Type", "Authorization"])
def public():
    """No access token required to access this route
    """
    response = "Hello from a public endpoint! You don't need to be authenticated to see this."
    return jsonify(message=response)


@medSched.route("/api/private")
@cross_origin(headers=["Content-Type", "Authorization"])
@cross_origin(headers=["Access-Control-Allow-Origin", "http://localhost:3000"])
@requires_auth
def private():
    """A valid access token is required to access this route
    """
    response = "Hello from a private endpoint! You need to be authenticated to see this."
    return jsonify(message=response)


@medSched.route("/api/private-scoped")
@cross_origin(headers=["Content-Type", "Authorization"])
@cross_origin(headers=["Access-Control-Allow-Origin", "http://localhost:3000"])
@requires_auth
def private_scoped():
    """A valid access token and an appropriate scope are required to access this route
    """
    if requires_scope("read:messages"):
        response = "Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to " \
                   "see this. "
        return jsonify(message=response)
    raise AuthError({
        "code": "Unauthorized",
        "description": "You don't have access to this resource"
    }, 403)


if __name__ == "__main__":
    medSched.run(host="0.0.0.0", port=env.get("PORT", 3010))


# def create_app():
#     app = Flask(__name__)
#     db.init_app(app)
#     return app