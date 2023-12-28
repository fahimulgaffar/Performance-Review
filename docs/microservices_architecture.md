
## A comparison of a microservices approach to the project to the existing (components-based) approach                     

  The existing components-based approach has the functionalities unified in modules which are often tightly coupled as well
as having a monolithic structure, meaning that components may communicate directly with one another. The frontend and backend
may have close interaction, and all of this allows for the project to be easier to maintain and enables complexity. Meanwhile, 
a microservices architecture decentralizes the services, allowing for simpler, independent functionalities that can be developed
individually. The loose coupling of microservices grants each service the opportunity to have its own data storage, thus being 
more flexible when choosing databases in order to select the most optimal one. This means that each functionality is its own separate
service, with its own responsibilities, unlike the components-based approach which makes all of the functionalities become more 
interconnected.

## A discussion on how the architecture and code would be different under a microservices architecture                     

  The architecture and code would undergo a major change with a microservices approach. All of the major functionalities
would be their own, separate service with its own API, and they would communicate via these APIs. In addition to this, they could also
have their own databases or even use a portion of a distributed database, which would reduce coupling in the code and make these
functionalities focus on one specific service. Communication between services will also change as their interactions will make use 
of HTTP requests, or an asynchronous pattern such as message queues or event-driven systems. This could prove to be difficult to
implement since ensuring data consistency would be a struggle. The functionalities would be independent from one another, 
making the verification of data consistency harder to detect, requiring robust work to corroborate uniformity and form testing
strategies.

## A discussion of how the software process would be different under a microservices architecture                

  The software process, much like the architecture itself, would become much more independent since each service would be separate
from one another. The team's focus would be on creating these independent services while maintaining clear communication of the
alterations being made to the code. Emphasizing clear services as well as defining interfaces is critical to ensure that the functionalities
collaborate seamlessly. Testing strategies for the code would also undergo drastic changes, and this would involve a team effort in order to
create comprehensive unit tests so that the services are integrated efficiently. Since there is less dependency in the code, it is 
important to create a resilient system, and in order to do this there needs to be an efficient maintenance of the individual services
as well as a discrete design that allows for coherent communication. Each functionality should be able to work autonomously, making the whole
project more complex as the integration of the services and the structure of the system pour their focus on clear communication and
decentralization.
