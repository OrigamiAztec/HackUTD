from flask import Flask
from flask_restful import Api, Resource
import instagram_scraper

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(HelloWorld, '/')

@app.route('/')
def homepage():
    return 'test'

if __name__ == '__main__':
    app.run(debug=True)
