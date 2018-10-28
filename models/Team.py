import datetime
from .User import User #to check if i can delete
from app import db, ma, bcrypt
from sqlalchemy.ext.hybrid import hybrid_property
from marshmallow import fields, validates_schema, ValidationError, post_dump
from .BaseMixin import BaseMixin


class TeamUser(db.Model):
    """
    TeamUser model
    """

    __tablename__ = 'teams_users'

    user_id = db.Column(
        db.Integer,
        db.ForeignKey('users.id'),
        primary_key=True
    )
    user = db.relationship('User')
    team_id = db.Column(
        db.Integer,
        db.ForeignKey('teams.id'),
        primary_key=True
    )
    team = db.relationship('Team')
    role = db.Column(db.Integer, nullable=False)


class TeamUserSchema(ma.Schema):
    """
    TeamUser schema
    """

    role = fields.Integer(required=True)
    user = fields.Nested('UserSchema')

    # @post_dump
    # def remove_ingredient_key(self, data):
    #     return {
    #         'name': data.get('name').get('name'),
    #         'amount': data.get('amount')
    #     }

    class Meta:
        model = TeamUser
        fields = (

            'user',
            'role'
        )



class Team(BaseMixin, db.Model):
    """
    Team model
    """

    # table name
    __tablename__ = "teams"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False, unique=True)
    description = db.Column(db.Text)
    image = db.Column(db.String(255))
    wave_id = db.Column(db.Integer, db.ForeignKey('waves.id'), nullable=True) #fk
    members = db.relationship(
        'TeamUser',
        cascade='all, delete-orphan'
    )

    def add_members(self, members):
        for member_team in members:
            member = User.query.filter_by(id=member_team['user_id']).first()
            self.members.append(
                TeamUser(
                    user_id = member.id,
                    role = member_team['role']
                )
            )

    def remove_members(self):
        while self.members:
            self.members.pop(0)

class TeamSchema(ma.Schema):
    """
    Team schema
    """

    name = fields.String(required=True)
    description = fields.String(required=False)
    image = fields.String(required=False)
    wave_id = fields.Integer(required=False)
    members = fields.Nested('TeamUserSchema', many=True)


    class Meta:
        model = Team
        fields = (
            'id',
            'name',
            'description',
            'image',
            'wave_id',
            'members'

        )
        dump_only = ('ingredients','created_at', 'updated_at')
