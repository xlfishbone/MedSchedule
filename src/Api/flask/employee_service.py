from models import Employee, db


def get_employee_list():
    return Employee.query().order_by(Employee.id).all()


def get_employee(emp_id):
    return Employee.query().get(emp_id)


def get_employee_by_name(name):
    return Employee.query().filter_by(username=name).first()


def add_employee(employee):
    db.session.add(employee)
    db.session.commit()


def delete_employee(emp_id):
    db.session.delete(get_employee(emp_id))
    db.session.commit()
