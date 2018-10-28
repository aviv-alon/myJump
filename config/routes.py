import os
from app import app
from controllers import wave, auth, team, budget


app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(wave.api, url_prefix='/api')
app.register_blueprint(team.api, url_prefix='/api')
app.register_blueprint(budget.api, url_prefix='/api')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if os.path.isfile('public/' + path):
        return app.send_static_file(path)

    return app.send_static_file('index.html')
