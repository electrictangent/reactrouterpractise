#!/usr/bin/env python3
# Simple JSON API backend to practise React
import sys
from flask import Flask

app = Flask(__name__)

@app.route('/')
def main():
    json_response = '[ \
            { category: "Fruits", price: "$1", stocked: true, name: "Apple" }, \
            { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" }, \
            { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" }, \
            { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" }, \
            { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" }, \
            { category: "Vegetables", price: "$1", stocked: true, name: "Peas" } \
            ]'
    return json_response

if __name__ == "__main__":
    app.run(host=sys.argv[1], port=sys.argv[2])

