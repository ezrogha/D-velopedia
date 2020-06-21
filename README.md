# D-velopedia
Create a profile/portfolio, share posts and get help from developers around the world

## Setup development environment

- Clone repo - `git clone https://github.com/ezrogha/D-velopedia.git`

- Change directorty - `cd D-velopedia`

- Install dependencies - `npm run install`

- Run server - `npm run server`

## Endpoints and Functionality

### User
| Endpoint                        | Functionality          | Access              |
| ---------                       |---------------         |---------------      |
| POST /api/users/register        | Regiter new account    | Public              |
| POST /api/users/login           | Login to account       | Public              |
| GET /api/users/current          | Get current user       | Private             |


### Profile
| Endpoint                  | Functionality             | Access            |
| ---------                 |---------------            |---------------    |
| GET /api/profile/all/     | Get all user profiles     | Public            |
| GET /api/profile/handle/:handle | Get user profile by handle  | Public            |
| GET /api/profile/user/:user_id | Get user profile by user_id  | Public            |
| GET /api/profile/     | Get current user profile     | Private            |
| POST /api/profile/     | Post profile data for current user  | Private           |
| POST /api/profile/experience    | Add experience to current user profile  | Private           |
| POST /api/profile/education    | Add education to current user profile  | Private           |


### Posts
| Endpoint                        | Functionality          | Access              |
| ---------                       |---------------         |---------------      |
| GET /api/posts/                 | Fetch all Posts        | Public              |
| GET /api/posts/:id              | Get post by id         | Public              |
| POST /api/posts/                | Add a new post         | Private             |
| DELETE /api/posts/:id           | Delete a post by id    | Private             |
| POST /api/posts/like/:id        | Like a post by id      | Private             |
| POST /api/posts/unlike/:id      | Unlike a post by id    | Private             |
| POST /api/posts/comment/:id      | Add comment to a post         | Private             |
| DELETE /api/posts/comment/:id      | Delete a comment of a post         | Private             |


## Usage
### Register

**Definition**
`POST /api/users/register`

**Arguments**
- `name`: `<string>` - Full Name
- `email`: `<string>` - Email
- `password`: `<string>` - Pawssord

### Login

**Definition**
`POST /api/users/login`

**Arguments**
- `email`: `<string>` - Email
- `password`: `<string>` - Pawssord

### Post to current user profile

**Definition**
`POST /api/profile/`

**Arguments**
> All are optional
- `handle`: `<string>`
- `company`: `<string>`
- `website`: `<string>`
- `location`: `<string>`
- `bio`: `<string>`
- `status`: `<string>`
- `githubusername`: `<string>`
- `skills`: `<string>` // skills seperated by commas
- `youtube`: `<string>`
- `twitter`: `<string>`
- `facebook`: `<string>`
- `linkedin`: `<string>`
- `instagram`: `<string>`

### Add experience to profile

**Definition**
`POST /api/profile/experience`

**Arguments**
- `title`: `<string>`
- `company`: `<string>`
- `location`: `<string>`
- `from`: `<string>` // date of any format
- `to`: `<string>`// date of any format
- `current`: `<string>`
- `description`: `<string>`


### Add education to profile

**Definition**
`POST /api/profile/education`

**Arguments**
- `school`: `<string>`
- `degree`: `<string>`
- `fieldofstudy`: `<string>`
- `from`: `<string>` // date of any format
- `to`: `<string>`// date of any format
- `current`: `<string>`
- `description`: `<string>`


### Create a post

**Definition**
`POST /api/posts/`

**Arguments**
- `name`: `<string>`
- `text`: `<string>`
- `avatar`: `<string>`


### Comment on a post

**Definition**
`POST /api/posts/comment/:id`

**Arguments**
- `name`: `<string>`
- `text`: `<string>`
- `avatar`: `<string>`

## Deployment
- [Heroku](https://fast-reef-54862.herokuapp.com/)