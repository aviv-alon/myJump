import datetime
from .User import User #to check if i can delete
from app import db, ma, bcrypt
from sqlalchemy.ext.hybrid import hybrid_property
from marshmallow import fields, validates_schema, ValidationError, post_dump
from .BaseMixin import BaseMixin

#
class TaskStat(db.Model):
    """
    TaskStat model
    """

    __tablename__ = 'tasks_stats'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
        db.Integer,
        db.ForeignKey('users.id'),
        nullable=True
    )
    user = db.relationship('User')
    team_id = db.Column(
        db.Integer,
        db.ForeignKey('teams.id'),
        nullable=True
    )
    team = db.relationship('Team')
    tasks_id = db.Column(
        db.Integer,
        db.ForeignKey('users.id'),
        nullable=False
    )
    task_status = db.Column(db.Integer, nullable=False)


class TaskStatSchema(ma.Schema):
    """
    TeamUser schema
    """

    user = fields.Nested('UserSchema')
    team = fields.Nested('TeamSchema')
    task_status = fields.Integer(required=True)

    # @post_dump
    # def remove_ingredient_key(self, data):
    #     return {
    #         'name': data.get('name').get('name'),
    #         'amount': data.get('amount')
    #     }

    class Meta:
        model = TeamUser
        fields = (
            'team_id',
            'user_id',
            'task_id',
            'role'
        )



class Task(BaseMixin, db.Model):
    """
    Task model
    """

    # table name
    __tablename__ = "tasks"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    is_published = db.Column(db.Boolean, nullable=True)
    task_type = db.Column(db.Integer, nullable=False)


class TaskSchema(ma.Schema):
    """
    Team schema
    """

    title = fields.String(required=True)
    description = fields.String(required=False)
    is_published = fields.Boolean(required=False)
    task_type = fields.Integer(required=True)


    class Meta:
        model = Team
        fields = (
            'id',
            'title',
            'description',
            'is_published',
            'task_type'

        )
        dump_only = ('ingredients','created_at', 'updated_at')
