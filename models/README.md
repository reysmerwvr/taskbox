# Conversation Product Model

Conversation Product Model consist basically in three schemes' definitions. [User schema](https://github.com/reysmerwvr/taskbox/blob/master/models/user.js), [Conversation schema](https://github.com/reysmerwvr/taskbox/blob/master/models/conversation.js) and [Comment schema](https://github.com/reysmerwvr/taskbox/blob/master/models/comment.js). Please see below each schema definition and its types properties.

1. [User Model](https://github.com/reysmerwvr/taskbox/blob/master/models/user.js):
   - name (String)
   - gender (String)
   - gender (String)
   - birthOfDate (Date)
   - profilePicture (String)
   - email (String)
   - password (String)
   - deletedAt (Date)

2. [Conversation Model](https://github.com/reysmerwvr/taskbox/blob/master/models/conversation.js):
   - title (String)
   - author (User)
   - description (String)
   - permaLink (String)
   - likes (Number)
   - comments (Array[Comment])
   - collaborators (Array[User])
   - deletedAt (Date)

3. [Commment Model]((https://github.com/reysmerwvr/taskbox/blob/master/models/comment.js)):
   - body (String)
   - author (User)
   - likes (Number)
   - deletedAt (Date)
