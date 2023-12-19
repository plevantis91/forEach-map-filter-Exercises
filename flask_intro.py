from flask import Flask

app = Flask(__name__)

@app.route("/welcome")
def welcome():
    return "welcome"

@app.route("/welcome/home")
def welcome_home():
    return "welcome home"

@app.route("/welcome/back")
def welcome_home():
    return "welcome back"

from flask import Flask, request 
from operations import add,sub,mult,div

app = Flask(__name__)

@app("/add")
def calc_add():
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = add(a, b)

    return str(result)
@app("/sub")
def calc_sub():
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = sub(a, b)

    return str(result)
@app("/mult")
def calc_mult():
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = mult(a, b)

    return str(result)

@app("/div")
def calc_div():
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = add(a, b)

    return str(result)