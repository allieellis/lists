from mongoengine import *


# Create a MongoDB client
conn = connect('tryit_db', host='mongodb+srv://allieellis:hybgbfvvf@scholarbot.bzr6n9o.mongodb.net/?retryWrites=true&w=majority')



class Column(EmbeddedDocument):
    name = StringField(default = "")
    accessor = StringField()
    type = StringField(default = "text") ##maybe an enum? 
    index = IntField()

  ##making the rows checkable is  equivalent to added a "checked" col 

class Cell(EmbeddedDocument):
    key  =  StringField()
    value = StringField()

class Row(EmbeddedDocument):
    index = IntField()
    data = DictField()


class Comment(EmbeddedDocument):
    col = IntField()
    row = IntField()
    value = StringField()

class Table(Document):
    title = StringField(default = "")
    columns = ListField(EmbeddedDocumentField(Column))
    rows = ListField(EmbeddedDocumentField(Row))
    comments = ListField(EmbeddedDocumentField(Comment))
    checks = BooleanField(default=False)

