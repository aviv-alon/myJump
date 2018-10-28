from sqlalchemy.ext.declarative import declared_attr
from app import db
from datetime import datetime

class BaseMixin(object):
    """
    Base model
    """

    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)


    def __init__(self, data):
        for key, item in data.items():
            setattr(self, key, item)

    def save(self):
        self.created_at = datetime.utcnow()
        self.updated_at = datetime.utcnow()
        db.session.add(self)
        db.session.commit()

    def update(self, data):
        for key, item in data.items():
            setattr(self, key, item)

        self.updated_at = datetime.utcnow()
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
