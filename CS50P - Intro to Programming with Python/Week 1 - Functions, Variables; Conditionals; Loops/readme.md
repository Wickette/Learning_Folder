# Functions, Variables; Conditionals; Loops
***

## Functions
`print()`

## Variables
ask user for name<br>
`name = input("What is your name? ")`

remove whitespace<br>
`name = name.strip()`

capitalize user's name<br>
`name = name.capitalize()`

capitalize first and last name<br>
`name = name.title()`

you can 'chain' methods<br>
`name = name.strip().title()`

clue to python that this is a special string 'f string'<br>

`print(f'hello, {name}')`

can't remember what this is - come back to it<br>
`print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)`

## String
a series of character <br>
`x = 'hello, world'`

## Integer (int)
'+'
'-'
'*'
'/'
'%'

### interactive mode
when you type `python` into terminal, you get interactive mode `>>>`
the moment you execute a line of code, you see the result instantly

int(some variable) - will change 'some variable' to an integer

you can 'nest functions'  
`x = int(input('Whats x? '))`
the input of 'x' will become int(x)
and change x to an integer

## Float
real numbers with decimal points<br>
```python
x = float(input('Whats x? ')) # 1.2
y = float(input('Whats y? ')) # 3.4
print(x + y)
# prints 4.6
```

`round(number[, ndigits])`
* square brackets means you'll see something 'optional'
* if you don't input a number of decimal places to be shown, it'll round to the integer
```python
x = float(input('Whats x? ')) # 1.2
y = float(input('Whats y? ')) # 3.4
z = round(x + y)
print(z)
# prints 5
```

```python
x = float(input('Whats x? ')) # 999
y = float(input('Whats y? ')) # 1
z = round(x + y)
print(z)
# prints 1000
```

what if we want commas

```python
x = float(input('Whats x? ')) # 1.2
y = float(input('Whats y? ')) # 3.4
z = round(x + y)
print(f'{z:,}') #formatting to print numbers with a ','
# prints 5
```
looks cryptic

```python
x = float(input('Whats x? ')) # 1.2
y = float(input('Whats y? ')) # 3.4
z = x / y
print(f'{z:.2f}') # formatting for 2 decimal places
```

### Make your own function
```python
name = input('What\'s your name? ')
hello()
print(name)
```

* def for 'define'
* indent is important, everything after the indent will be invoked

```python
def hello(): # defining a custom function
    print('Hello') # indented code is what is run

name = input('What\'s your name? ')
hello()
print(name)
```

* customize hello() to name the users name input
```python
def hello(to): # adding a param
    print('Hello,', to) 

name = input('What\'s your name? ')
hello(name) # passing through the name input
```
* adding a defined variable. It will run 'Hello, world' right off the bat, then will ask you to input your name, and will run 'Hello, name'

```python
def hello(to='world'): # adding a param = to 'world'
    print('Hello,', to) 

hello() # prints 'Hello, world'
name = input('What\'s your name? ')
hello(name) # prints 'Hello, name'
```

* be mindful of scope

* python interpretter will take things literally, you need to make sure functions are created before you use them
* `def main():`

### return

```python
def main():
    x = int(input('Whats x? '))
    print('x squared is', square(x))

def square(n):
    return n * n # introducing the return keyword

main()
```

## Conditionals
* ask questions, and answer questions with logic

Built in syntax 
* '>' 
* '>=' 
* '<' 
* '<='
* '=='
* '!='

### if statements

```python
x = int(input('what\'s x? '))
y = int(input('what\'s y? '))

if x < y:
    print('x is less than y')
if x > y:
    print('x is greater than y')
if x == y:
    print('x is equal than y')
```

### elif

* takes into account the previous questions answer
```python
x = int(input('what\'s x? '))
y = int(input('what\'s y? '))

if x < y:
    print('x is less than y')
elif x > y:
    print('x is greater than y')
elif x == y:
    print('x is equal than y')
```

### else
```python
x = int(input('what\'s x? '))
y = int(input('what\'s y? '))

if x < y:
    print('x is less than y')
elif x > y:
    print('x is greater than y')
else x == y:
    print('x is equal than y')
```

### or
```python
x = int(input('what\'s x? '))
y = int(input('what\'s y? '))

if x < y or x > y:
    print('x is not equal to y')
else: 
    print('x is equal to y')

```

### and
```python
score = int(input('Score: '))

if score >= 90 and score <= 100:
    print('Grade: A')
elif score >= 80 and score < 90:
    print('Grade: B')
elif score >= 70 and score < 80:
    print('Grade: C')
elif score >= 60 and score < 70:
    print('Grade: D')
else:
    print('Grade: F')
```

### parity
' % ' modulo operator - remainder (how much is left over)

```python
def main():
    x = int(input('What\'s x? '))

    if is_even(x):
        print('even')
    else:
        print('odd')

def is_even(n):
    if n % 2 == 0:
        return True
    else:
        return False

main()
```

### Pythonic
```python
def is_even(n):
    return True if n % 2 == 0 else False
```
## Loops
### while
* do while - loop
```python
i = 3
while i != 0:
    print('meow')
    i -= 1
```
### list
`[0,1,2]`<br> `['apple', 'orange', 'banana']`<br>

```python
students = ['Hermione', 'Harry', 'Ron']

for student in students:
    print(student)
```

### len

```python
students = ['Hermione', 'Harry', 'Ron']
for i in range(len(students)):
    print(student[i])
```

### for
```python
for _ in range(3):
    print('meow')
```

```python
print('meow\n' * 3, end="")
```

### break
* accept user input
```python
while True:
    n = int(input("What's n?: "))
    if n > 0:
        break

for _ in range(n):
    print('meow')
```

```python
def main():
    number = get_number()
    meow(3)

def get_number():
    while True:
        n = int(input("What's n?: "))
        if n > 0:
            return n

def meow(n):
    for _ in range(n):
        print('meow')

main()
```

### dict - dictionaries
* associate one value with another
* key value pairs
* like an object, typed in JSON
* when looping over the dictionary, in python it prints the keys

```python
students = {
    'Hermoine': 'Gryffindor',
    'Harry': 'Gryffindor',
    'Ron': 'Gryffindor',
    'Draco': 'Slytherin',
}

print(students['Hermoine']) # etc

for student in students:
    print(student, students[student], sep=', )
```

```python
students = [
    {'name': 'Hermione', 'house': 'Gryffindor', 'patronus': 'Otter'},
    {'name': 'Harry', 'house': 'Gryffindor', 'patronus': 'Stag'},
    {'name': 'Ron', 'house': 'Gryffindor', 'patronus': 'Terrier'},
    {'name': 'Draco', 'house': 'Slytherin', 'patronus': None}
]

for student in students:
    print(student['name'], student['house'], sep=', ')
```

### Mario Game Example
```python
def main():
    print_square(3)

def print_square(size):
    for i in range(size):
        print_row(size)

def print_row(width):
    print('#' * width)

main()

# prints a square

###
###
###
```