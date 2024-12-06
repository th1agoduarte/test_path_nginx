from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/v1/test", methods=["GET"])
def test():
    return jsonify({"message": "Hello from Python!"})

@app.route("/api/v1/test2", methods=["GET"])
def test2():
    return jsonify({"message": "This is another endpoint in Python!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
