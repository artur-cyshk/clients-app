FROM python:2

COPY contacts.db requirements.txt /srv/contacts/
RUN pip install -r /srv/contacts/requirements.txt

COPY app.py setup.py /srv/contacts/
RUN pip install /srv/contacts
RUN pip install -U flask-cors

WORKDIR /srv/contacts
ENV FLASK_APP=app

EXPOSE 5000

ENTRYPOINT ["flask"]

CMD ["run", "--host", "0.0.0.0"]
