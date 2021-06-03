from flask import Blueprint, render_template, flash, request
from flask_login import login_required, current_user
from __init__ import create_app, db
from flask import jsonify, make_response
from sqlalchemy import text
import json
import requests

########################################################################################
main = Blueprint('main', __name__)

@main.route('/') # home page that return 'index'
def index():
    return render_template('index.html')  #you may return index page while not logged to system
    #return render_template('login.html') #you may return login page while not logged to system

@main.route('/profile') # profile page that return 'profile'
@login_required
def profile():

    result = current_user.query.all()

    return render_template('profile.html', name=current_user.name, list1=result)



# @main.route('/get_user_roles')
# @login_required
# def get_user_roles():
#
#     #sql = text('select radd, rdel, rmod from user_role where user_id = :val1')
#     sql = text('select id, user_id, radd, rdel, rmod from user_role where user_id = :val1')
#     result = db.engine.execute(sql, {'val1': 2})
#
#     if result.returns_rows == False:
#         response = []
#     else:
#         response = [dict(row.items()) for row in result]
#
#     print(json.dumps(response))
#     return json.dumps(response)



@main.route('/set_user_state', methods=['POST'])
@login_required
def set_user_state():#user_id, state, field_name

    content = request.json

    print(content['state'])

    jsonData = json.dumps(content)
    print(jsonData)

    if content['state'] == 1:
        new_state = 0
    elif content['state'] == 0:
        new_state = 1

    if content['field_name'] == 'radd':
        sql = text('update user set radd = :new_state where id = :user_id')
    elif content['field_name'] == 'rdel':
        sql = text('update user set rdel = :new_state where id = :user_id')
    elif content['field_name'] == 'rmod':
        sql = text('update user set rmod = :new_state where id = :user_id')

    result = db.engine.execute(sql, {'user_id': content['user_id'], 'new_state':new_state})

    if result.returns_rows == False:
        response = []
    else:
        response = [dict(row.items()) for row in result]

    print(json.dumps(response))
    return json.dumps(response)



app = create_app() # we initialize flask app
if __name__ == '__main__':
    db.create_all(app=create_app()) # create database
    app.run(debug=True) # run the flask app