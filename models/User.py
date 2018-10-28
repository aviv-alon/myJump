import datetime
from app import db, ma, bcrypt
from sqlalchemy.ext.hybrid import hybrid_property
from marshmallow import fields, validates_schema, ValidationError
from .BaseMixin import BaseMixin

class User(BaseMixin, db.Model):
    """
    User model
    """

    # table name
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    _password = db.Column(db.String(128))
    first_name = db.Column(db.String(20), nullable=True)
    last_name = db.Column(db.String(20), nullable=True)
    image = db.Column(db.String(255), nullable=True)
    permission = db.Column(db.Integer, nullable=False, default=2)
    default_wave_id = db.Column(db.Integer, db.ForeignKey('waves.id'), nullable=True) #fk
    # created_at = db.Column(db.DateTime)
    # updated_at = db.Column(db.DateTime)

    @hybrid_property
    def password(self):
        pass

    @password.setter
    def password(self, plaintext):
        self._password = bcrypt.generate_password_hash(plaintext).decode('utf-8')

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

    def validate_password(self, plaintext):
        return bcrypt.check_password_hash(self._password, plaintext)


class UserSchema(ma.Schema):
    """
    User schema
    """

    username = fields.String(required=True)
    email = fields.Email(required=True)
    password = fields.String(required=True)
    password_confirmation = fields.String(required=True)
    first_name = fields.String(required=False)
    last_name = fields.String(required=False)
    image = fields.Url(required=False)
    permission = fields.Integer(required=False)
    default_wave_id = fields.Integer(required=False)


    @validates_schema
    def validate_password(self, data):
        if(data.get('password') != data.get('password_confirmation')):
            raise ValidationError(
                'Passwords do not match',
                'password_confirmation'
            )

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'email',
            'password',
            'password_confirmation',
            'first_name',
            'last_name',
            'image',
            'permission',
            'default_wave_id',
            'created_at',
            'updated_at'
        )
        dump_only = ('created_at', 'updated_at')
