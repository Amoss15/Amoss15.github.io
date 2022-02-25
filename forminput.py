import sqlite3
from flask import Flask, request, redirect

# Configure application
app = Flask(__name__)

# Connect to ContactForm database
db = sqlite3.connect("/ContactForm.db")

@app.route("/", methods=["GET", "POST"])
def index():

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure email was submitted
        if not request.form.get("emailadd"):
            return ("Please provide a valid email address")

        # Ensure name was submitted
        elif not request.form.get("fname"):
            return ("Please provide your name")

        # Ensure comments were submitted
        elif not request.form.get("subject"):
            return ("Please be sure to leave a message!")

        # Inserts contact into the database
        db.execute("INSERT INTO Contacts (email, name, comments) VALUES (emailadd, firstname, subject)")

        return (redirect ("/"))


app.run()

        