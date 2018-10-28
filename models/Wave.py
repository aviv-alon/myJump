import datetime
from app import db, ma, bcrypt
from sqlalchemy.ext.hybrid import hybrid_property
from marshmallow import fields, validates_schema, ValidationError
from .BaseMixin import BaseMixin

class Wave(BaseMixin, db.Model):
    """
    Wave model
    """

    # table name
    __tablename__ = "waves"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False, unique=True)
    start_date = db.Column(db.DateTime)
    # created_at = db.Column(db.DateTime)
    # updated_at = db.Column(db.DateTime)


    # def __init__(self, data):
    #     for key, item in data.items():
    #         setattr(self, key, item)
    #
    #     self.created_at = datetime.datetime.utcnow()
    #     self.updated_at = datetime.datetime.utcnow()
    #
    # def save(self):
    #     db.session.add(self)
    #     db.session.commit()
    #
    # def update(self, data):
    #     for key, item in data.items():
    #         setattr(self, key, item)
    #     self.updated_at = datetime.datetime.utcnow()
    #     db.session.commit()
    #
    # def delete(self):
    #     db.session.delete(self)
    #     db.session.commit()


class WaveSchema(ma.Schema):
    """
    Wave schema
    """

    name = fields.String(required=True)
    start_date = fields.Date(required=False)

    class Meta:
        model = Wave
        fields = (
            'id',
            'name',
            'start_date'
        )
        dump_only = ('created_at', 'updated_at')
