import datetime
from .User import User #to check if i can delete
from app import db, ma, bcrypt
from sqlalchemy.ext.hybrid import hybrid_property
from marshmallow import fields, validates_schema, ValidationError, post_dump
from .BaseMixin import BaseMixin


class Budget(BaseMixin, db.Model):
    """
    Budget model
    """

    # table name
    __tablename__ = "budgets_lines"

    id = db.Column(db.Integer, primary_key=True)
    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    amount = db.Column(db.Float, nullable=False)
    created_by = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    invoice_tax_number = db.Column(db.String(255), nullable=True)
    invoice_image = db.Column(db.String(255), nullable=True)
    date = db.Column(db.Date, nullable=True)


class BudgetSchema(ma.Schema):
    """
    Budget schema
    """


    title = fields.String(required=True)
    description = fields.String(required=False)
    amount = fields.Float(required=True)
    team_id = fields.Integer(required=True)
    created_by = fields.Integer(required=False)
    invoice_tax_number = fields.String(required=False)
    invoice_image = fields.String(required=False)
    date = fields.Date(required=False)


    class Meta:
        model = Budget
        fields = (
            'id',
            'title',
            'description',
            'amount',
            'team_id',
            'created_by',
            'invoice_tax_number',
            'invoice_image',
            'date'
        )
        dump_only = ('created_at', 'updated_at')
