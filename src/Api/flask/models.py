from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Employee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String, unique=True)
    holiday_rotation_order = db.Column(db.Integer)
    xmas_rotation_order = db.Column(db.Integer)
    weekend_rotation_order = db.Column(db.Integer)
    bench_restrictions = db.relationship(
        "EmployeeBenchRestriction", backref=db.backref("employee", lazy=True))
    schedule: db.relationship(
        "EmployeeBiWeeklySchedule", backref=db.backref("employee", lazy=True))

    def __repr__(self):
        return '<Employee %r>' % self.username


class EmployeeBiWeeklySchedule(db.Model):
    employee_id = db.Column(db.Integer, db.ForeignKey(
        'Employee.id'), nullable=False)
    monday_w1 = db.Column(db.DateTime)
    tuesday_w1 = db.Column(db.DateTime)
    wednesday_w1 = db.Column(db.DateTime)
    thursday_w1 = db.Column(db.DateTime)
    friday_w1 = db.Column(db.DateTime)
    saturday_w1 = db.Column(db.DateTime)
    sunday_w1 = db.Column(db.DateTime)
    monday_w2 = db.Column(db.DateTime)
    tuesday_w2 = db.Column(db.DateTime)
    wednesday_w2 = db.Column(db.DateTime)
    thursday_w2 = db.Column(db.DateTime)
    friday_w2 = db.Column(db.DateTime)
    saturday_w2 = db.Column(db.DateTime)
    sunday_w2 = db.Column(db.DateTime)

    def __repr__(self):
        return '<EmployeeBiWeeklySchedule %r>' % self.employee_id


class Bench(db.Model):
    employee_id = db.Column(db.Integer, db.ForeignKey(
        'Employee.id'), nullable=False)
    name = db.Column(db.String, unique=True, nullable=False)
    monday = db.Column(db.Boolean, default=False)
    tuesday = db.Column(db.Boolean, default=False)
    wednesday = db.Column(db.Boolean, default=False)
    thursday = db.Column(db.Boolean, default=False)
    friday = db.Column(db.Boolean, default=False)
    saturday = db.Column(db.Boolean, default=False)
    sunday = db.Column(db.Boolean, default=False)
    employee_restrictions = db.relationship(
        "EmployeeBenchRestriction", backref=db.backref("bench", lazy=True))

    def __repr__(self):
        return '<Bench %r>' % self.name


class EmployeeBenchRestriction(db.Model):
    employee_id = db.Column(db.Integer, db.ForeignKey(
        'Employee.id'), nullable=False)
    bench_id = db.Column(db.Integer, db.ForeignKey('Bench.id'), nullable=False)
    monday = db.Column(db.Boolean, default=False)
    tuesday = db.Column(db.Boolean, default=False)
    wednesday = db.Column(db.Boolean, default=False)
    thursday = db.Column(db.Boolean, default=False)
    friday = db.Column(db.Boolean, default=False)
    saturday = db.Column(db.Boolean, default=False)
    sunday = db.Column(db.Boolean, default=False)
    notes = db.Column(db.String)

    def __repr__(self):
        return '<EmployeeBenchRestriction %r>' % self.employee_id % self.bench_id
