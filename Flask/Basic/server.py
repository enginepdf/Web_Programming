# https://flask.palletsprojects.com/en/1.1.x/quickstart/



from flask import Flask, render_template
app = Flask(__name__)


@app.route('/<int:id>')  # 127.0.0.1:5000/5  
def app(id=None):
    return render_template('index.html', jinja_var=id)  



# export FLASK_ENV=development
# export FLASK_APP=server.py
# flask run

#   Running on http://127.0.0.1:5000/
#   Debug mode: on    --> server refreshes on code change