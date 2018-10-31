from flask import Blueprint, request, jsonify, g
from models.Team import Team, TeamSchema, TeamUser, TeamUserSchema
from models.User import User, UserSchema
from models.Budget import Budget, BudgetSchema
from lib.secure_route import secure_route

team_schema = TeamSchema()
user_schema = UserSchema()

budget_schema = BudgetSchema()
budgets_schema = BudgetSchema(many=True)



api = Blueprint('budget', __name__)

# TODO: secure just foe admin
@api.route('/budgets', methods=['GET'])
@secure_route
def index():
    req_team_id = request.args.get('teamId')
    if req_team_id:
        print('req_team_id = ' + req_team_id)
        budget = Budget.query.filter(Budget.team_id == req_team_id)
    else:
        print('req_team_id = ' + req_team_id)
        budget = Budget.query.all()

    return budgets_schema.jsonify(budget)


@api.route('/budgets/<int:id>', methods=['GET'])
@secure_route
def show(id):
    budget = Budget.query.get(id)
    budget = Budget.query.get(id)

    if not budget:
        return jsonify({'message': 'Not found'}), 404

    return budget_schema.jsonify(budget)


@api.route('/budgets', methods=['POST'])
@secure_route
def create():
    req_data = request.get_json()
    data, errors = budget_schema.load(req_data)
    print(data)

    if errors:
        return jsonify({'errors': errors}), 422

    budget = Budget(data)
    print(budget)
    budget.save()

    return budget_schema.jsonify(budget), 201


@api.route('/budget/<int:id>', methods=['PUT', 'PATCH'])
@secure_route
def update(id):
    budget = Budget.query.get(id)

    if not budget:
        return jsonify({'message': 'Not found'}), 404

    req_data = request.get_json()
    data, error = budget_schema.load(req_data)

    if error:
        return jsonify({'error': error}), 422
    budget.update(data)
    return budget_schema.jsonify(budget)




@api.route('/budget/<int:id>', methods=['DELETE'])
@secure_route
def delete(id):
    budget = Budget.query.get(id)
    if not budget:
        return jsonify({'message': 'Not found'}), 404

    budget.delete()
    return '', 204
