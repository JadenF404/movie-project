from flask import request, jsonify
from config import app, db
from models import Movie

@app.route('/movies', methods=['GET'])
def get_movies():
    movies = Movie.query.all()
    json_movies = list(map(lambda movie: movie.to_json(), movies))
    return jsonify({'movies': json_movies})

@app.route('/add_movie', methods=['POST'])
def add_movie():
    title = request.json.get('title')
    rating = request.json.get('rating')
    director = request.json.get('director')
    actor1 = request.json.get('actor1')
    actor2 = request.json.get('actor2')

    if not title or not rating or not director or not actor1 or not actor2:
        return jsonify({'error': 'Please provide all fields'}), 400
    
    new_movie = Movie(title=title, rating=rating, director=director, actor1=actor1, actor2=actor2)
    try:
        db.session.add(new_movie)
        db.session.commit()
    except Exception as e:
        return jsonify({'error': str(e)}), 400
    
    return jsonify({'message': 'Movie added'}), 201

@app.route('/update_contact/int:id', methods=['PATCH'])
def update_movie(id):
    movie = Movie.query.get(id)

    if not movie:
        return jsonify({'error': 'Movie not found'}), 404
    
    data = request.json
    movie.title = data.get('title', movie.title)
    movie.rating = data.get('rating', movie.rating)
    movie.director = data.get('director', movie.director)
    movie.actor1 = data.get('actor1', movie.actor1)
    movie.actor2 = data.get('actor2', movie.actor2)

    db.session.commit()

    return jsonify({'message': 'Movie updated'}), 200

@app.route('/delete_movie/int:id', methods=['DELETE'])
def delete_movie(id):
    movie = Movie.query.get(id)

    if not movie:
        return jsonify({'error': 'Movie not found'}), 404
    
    db.session.delete(movie)
    db.session.commit()

    return jsonify({'message': 'Movie deleted'}), 200
        
if __name__ == '__main__':
    with app.app_context():
        db.create_all()

    app.run(debug=True)