from config import db

class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), unique = False, nullable=False)
    rating = db.Column(db.Float, unique = False, nullable=False)
    director = db.Column(db.String(100), unique = False, nullable=False)
    actor1 = db.Column(db.String(100), unique = False, nullable=False)
    actor2 = db.Column(db.String(100), unique = False, nullable=False)

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'rating': self.rating,
            'director': self.director,
            'actor1': self.actor1,
            'actor2': self.actor2
        }  
    
    