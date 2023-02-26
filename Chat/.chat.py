from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

openai.api_key = "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"

def mychat(prompt): 
    response = openai.Completion.create(
        model = "text-davince-003",
        prompt = prompt,
        max_tokens = 3000,
    )
    return response.choices[0].text

def mydraw(prompt): 
    response = openai.Image.create(
        size = '2080x2080',
        prompt = prompt,
        n = 1,
        response_format = "url"
    )
    return response['data'][0]['url']

@app.route('/chatbot')
def chatbot():
        pergunta = request.args.get('pergunta')
        if pergunta[0:4] == 'img:' :
            pergunta = pergunta.repace('img:', '')
            resposta = mydraw(pergunta)
            return jsonify(url_image=resposta, resposta = '')
        else:
            resposta = mychat(pergunta)
            return jsonify(resposta=resposta)
    
app.run()