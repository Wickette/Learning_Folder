students = [
    {'name': 'Hermione', 'house': 'Gryffindor', 'patronus': 'Otter'},
    {'name': 'Harry', 'house': 'Gryffindor', 'patronus': 'Stag'},
    {'name': 'Ron', 'house': 'Gryffindor', 'patronus': 'Terrier'},
    {'name': 'Draco', 'house': 'Slytherin', 'patronus': None}
]

for student in students:
    print(student['name'], student['house'], sep=', ')