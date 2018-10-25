from flask import Blueprint, request, jsonify, g
from models.Wave import Wave, WaveSchema
from lib.secure_route import secure_route

wave_schema = WaveSchema()
waves_schema = WaveSchema(many=True)

api = Blueprint('wave', __name__)


@api.route('/waves', methods=['GET'])
@secure_route
def index():
    waves = Wave.query.all()
    return waves_schema.jsonify(waves)


@api.route('/waves/<int:id>', methods=['GET'])
@secure_route
def show(id):
    wave = Wave.query.get(id)

    if not wave:
        return jsonify({'message': 'Not found'}), 404

    return wave_schema.jsonify(wave)


@api.route('/waves', methods=['POST'])
@secure_route
def create():
    req_data = request.get_json()
    data, errors = wave_schema.load(req_data)
    print(data)

    if errors:
        return jsonify({'errors': errors}), 422

    wave = Wave(data)
    wave.save()

    return wave_schema.jsonify(wave), 201


@api.route('/waves/<int:id>', methods=['PUT', 'PATCH'])
@secure_route
def update(id):
    wave = Wave.query.get(id)

    if not wave:
        return jsonify({'message': 'Not found'}), 404

    req_data = request.get_json()
    data, error = wave_schema.load(req_data)

    if error:
        return jsonify({'error': error}), 422

    wave.update(data)

    return wave_schema.jsonify(wave)


@api.route('/waves/<int:id>', methods=['DELETE'])
@secure_route
def delete(id):
    wave = Wave.query.get(id)
    if not wave:
        return jsonify({'message': 'Not found'}), 404

    wave.delete()
    return '', 204
