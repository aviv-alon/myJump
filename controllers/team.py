from flask import Blueprint, request, jsonify, g
from models.Team import Team, TeamSchema, TeamUser, TeamUserSchema
from models.User import User, UserSchema
from lib.secure_route import secure_route

team_schema = TeamSchema()
teams_schema = TeamSchema(many=True)

user_schema = UserSchema()


api = Blueprint('team', __name__)


@api.route('/teams', methods=['GET'])
@secure_route
def index():
    teams = Team.query.all()
    return teams_schema.jsonify(teams)


@api.route('/teams/<int:id>', methods=['GET'])
@secure_route
def show(id):
    team = Team.query.get(id)

    if not team:
        return jsonify({'message': 'Not found'}), 404

    return team_schema.jsonify(team)


@api.route('/teams', methods=['POST'])
@secure_route
def create():
    req_data = request.get_json()
    data, errors = team_schema.load(req_data)
    print(data)

    if errors:
        return jsonify({'errors': errors}), 422

    team = Team(data)
    team.save()

    return team_schema.jsonify(team), 201

    # req_data = request.get_json()
    # ingredients = req_data['ingredients']
    # del req_data['ingredients']
    #
    # try:
    #     data = cocktail_schema.load(req_data)
    # except ValidationError as error:
    #     return jsonify({'error': error.messages}), 422
    #
    # cocktail = Cocktail(data)
    # cocktail.add_ingredients(ingredients)
    #
    # cocktail.save()
    #
    # return cocktail_schema.jsonify(cocktail), 201


@api.route('/teams/<int:id>', methods=['PUT', 'PATCH'])
@secure_route
def update(id):
    team = Team.query.get(id)

    if not team:
        return jsonify({'message': 'Not found'}), 404

    req_data = request.get_json()
    data, error = team_schema.load(req_data)
    members = req_data['members']

    del req_data['members']

    try:
        data = team_schema.load(req_data)
    except ValidationError as error:
        return jsonify({'error': error.messages}), 422

    team.remove_members()
    team.add_members(members)

    team.update(data)

    return team_schema.jsonify(team)




@api.route('/teams/<int:id>', methods=['DELETE'])
@secure_route
def delete(id):
    team = Team.query.get(id)
    if not team:
        return jsonify({'message': 'Not found'}), 404

    team.delete()
    return '', 204


# @api.route('/teams/<int:id>/users', methods=['POST'])
# @secure_route
# def create_users(id):
#     req_data = request.get_json()
#     req_data['user_id'] = g.current_user.id
#     req_data['student_id'] = id
#     data, errors = student_comment_schema.load(req_data)
#
#     if errors:
#         jsonify({'errors': errors}), 422
#
#     comment = StudentComment(data)
#     comment.save()
#
#     return student_comment_schema.jsonify(comment)
