# Address-Book-Rest-Api

#after clone project
#do:  npm install
     # add config.env file inside config folder
      #inside config.env(add these three variabe) 
      MONGO_URL=
      JWT_SECRET=
      PORT=4000
#start: npm run dev


#Api endpoints#
#create contact 
# http://localhost:4000/api/v1/contact/new   //add single or bulk data through body

# get contact(with seach,pagination,limit)

# http://localhost:4000/api/v1/contact/getAll   //get all contact

# http://localhost:4000/api/v1/contact/getAll?keyword=r&limit=7  //get search,pagination,limit

#get single contact
# http://localhost:4000/api/v1/contact/getOne/:id

#update contact
# http://localhost:4000/api/v1/contact/update/:id

#delete contact
# http://localhost:4000/api/v1/contact/delete/:id

#user Api(for token) Endpoint

#.register
#http://localhost:4000/api/v1/user/register

#.login
http://localhost:4000/api/v1/user/login

#.logout
#http://localhost:4000/api/v1/user/logout

#.get profile

#http://localhost:4000/api/v1/user/me


