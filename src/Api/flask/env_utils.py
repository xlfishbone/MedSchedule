from os import environ as env
from dotenv import load_dotenv, find_dotenv


def set_up_env():
    env_file = find_dotenv()
    if env_file:
        load_dotenv(env_file)
