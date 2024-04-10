(this["webpackJsonpcloud-heroes"]=this["webpackJsonpcloud-heroes"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('{"domain":"{AUTH0_DOMAIN}","clientId":"{AUTH0_CLIENTID}","scope":"openid profile email"}')},26:function(e,a,n){},39:function(e,a,n){},40:function(e,a,n){},41:function(e,a,n){"use strict";n.r(a);var t=n(1),s=n(19),i=n.n(s),o=(n(26),n(4)),r=n(0);var l=()=>Object(r.jsx)("div",{className:"hello",children:Object(r.jsx)("h2",{className:"my-5 text-center",children:"Welcome Cloud Heroes"})}),c=n.p+"static/media/insights.c8ac0b08.gif";var u=()=>Object(r.jsxs)("footer",{className:"bg-light p-3 text-center",children:[Object(r.jsx)("img",{src:c,height:"80px",align:"center",alt:"Logo"}),"\xa9 Cloud Insights 2024",Object(r.jsx)("header",{align:"center",children:"v1.3.3"})]});var d=n(11),p=n(10);var m=()=>{const{loginWithRedirect:e}=Object(p.b)();return Object(r.jsx)("button",{className:"btn btn-primary btn-block",onClick:()=>e(),children:"Log In"})};var h=()=>{const{logout:e}=Object(p.b)();return Object(r.jsx)("button",{className:"btn btn-danger btn-block",onClick:()=>e({returnTo:window.location.origin}),children:"Log Out"})},g=n(42);var S=()=>{const{isAuthenticated:e}=Object(p.b)();return Object(r.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(r.jsx)(d.b,{to:"/dev.cloud-heroes",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Home"}),Object(r.jsx)(d.b,{to:"/quiz",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Quiz"}),e&&Object(r.jsx)(d.b,{to:"/exam",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Exam"}),Object(r.jsx)(d.b,{to:"/about",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"About"}),Object(r.jsx)(d.b,{to:"/resources",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Resources"}),e&&Object(r.jsx)(d.b,{to:"/profile",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Profile"}),e&&Object(r.jsx)(g.a,{children:Object(r.jsx)(m,{})}),e&&Object(r.jsx)(g.a,{children:Object(r.jsx)(h,{})})]})};var v=()=>Object(r.jsx)("div",{className:"nav-container mb-3",children:Object(r.jsx)("nav",{className:"navbar navbar-expand-md navbar-light bg-light",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{}),Object(r.jsx)(S,{})]})})});var b=[{question:"What does EC2 stand for in AWS?",options:["Elastic Container Service","Elastic Compute Cloud","Elastic Cache","Elastic Container Cloud"],answer:"Elastic Compute Cloud",explain:"Answer: Elastic Compute Cloud Explanation: According to AWS documentation, EC2 stands for Elastic Compute Cloud, which is a web service that provides resizable compute capacity in the cloud."},{question:"Which AWS service is used for object storage?",options:["RDS","S3","EC2","Lambda"],answer:"S3",explain:"Answer: S3 Explanation: Amazon S3 (Simple Storage Service) is an object storage service offered by AWS. It is commonly used for storing and retrieving large amounts of data."},{question:"What is the primary function of Amazon RDS?",options:["Content Delivery Network","Database service","File storage","Virtual private server"],answer:"Database service",explain:"Answer: Database service Explanation: Amazon RDS (Relational Database Service) is a managed relational database service that makes it easier to set up, operate, and scale a relational database in the cloud."},{question:"Which AWS service allows you to run code without provisioning or managing servers?",options:["EC2","S3","Lambda","DynamoDB"],answer:"Lambda",explain:"Answer: Lambda Explanation: AWS Lambda is a serverless computing service that lets you run code in response to events without provisioning or managing servers."},{question:"What does S3 stand for in AWS?",options:["Simple Storage Service","Server Storage Service","Secure Storage Service","Scalable Storage Service"],answer:"Simple Storage Service",explain:"Answer: Simple Storage Service Explanation: Amazon S3 (Simple Storage Service) provides object storage through a web interface. It is designed to store and retrieve any amount of data from anywhere on the web."},{question:"Which AWS service is commonly used for scalable message queuing?",options:["SQS","SNS","RDS","ECS"],answer:"SQS",explain:"Answer: SQS Explanation: Amazon SQS (Simple Queue Service) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications."},{question:"What AWS service is used for deploying and managing containerized applications?",options:["ECS","RDS","Lambda","DynamoDB"],answer:"ECS",explain:"Answer: ECS Explanation: Amazon ECS (Elastic Container Service) is a fully managed container orchestration service that allows you to run, stop, and manage Docker containers on a cluster."},{question:"What is the main benefit of using CloudFront in AWS?",options:["Secure data storage","Scalable database management","Low-latency content delivery","Real-time analytics"],answer:"Low-latency content delivery",explain:"Answer: Low-latency content delivery Explanation: AWS CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency."},{question:"Which AWS service is used for launching and managing virtual servers in the cloud?",options:["EC2","S3","RDS","Lambda"],answer:"EC2",explain:"Answer: EC2 Explanation: Amazon EC2 (Elastic Compute Cloud) is a web service that provides resizable compute capacity in the cloud. It allows you to launch and manage virtual servers, known as instances."},{question:"What is the main function of AWS IAM?",options:["Data warehousing","Identity and access management","Content delivery","Network security"],answer:"Identity and access management",explain:"Answer: Identity and access management Explanation: AWS IAM (Identity and Access Management) is a web service for securely controlling access to AWS services and resources. It enables you to manage users, groups, roles, and permissions."},{question:"Which AWS service is used for serverless data processing?",options:["EMR","Glue","Kinesis","Athena"],answer:"Glue",explain:"Answer: Glue Explanation: AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy to prepare and load data for analytics. It is serverless and automatically provisions the infrastructure needed to run your ETL jobs."},{question:"What AWS service provides managed Kubernetes clusters?",options:["ECS","EKS","Fargate","Lambda"],answer:"EKS",explain:"Answer: EKS Explanation: Amazon EKS (Elastic Kubernetes Service) is a fully managed Kubernetes service provided by AWS. It allows you to run Kubernetes clusters without needing to install, operate, and maintain your own Kubernetes control plane or worker nodes."},{question:"What is the main benefit of using AWS Lambda?",options:["Reduced cost of infrastructure management","Increased scalability of applications","Simplified deployment process","Improved security of data storage"],answer:"Reduced cost of infrastructure management",explain:"Answer: Reduced cost of infrastructure management Explanation: AWS Lambda is a serverless computing service that lets you run code in response to events without provisioning or managing servers. It helps reduce infrastructure management costs by automatically scaling resources based on demand."},{question:"What AWS service is used for real-time streaming data processing?",options:["Kinesis","SQS","SNS","Glue"],answer:"Kinesis",explain:"Answer: Kinesis Explanation: Amazon Kinesis is a platform for collecting, processing, and analyzing real-time streaming data at scale. It allows you to ingest data from various sources, process it in real-time, and store it for further analysis."},{question:"Which AWS service is commonly used for building machine learning models?",options:["SageMaker","Redshift","Glue","Neptune"],answer:"SageMaker",explain:"Answer: SageMaker Explanation: Amazon SageMaker is a fully managed service that enables data scientists and developers to build, train, and deploy machine learning models at scale. It provides built-in algorithms, Jupyter notebooks, and managed infrastructure for machine learning workflows."},{question:"What does VPC stand for in AWS?",options:["Virtual Private Cloud","Virtual Personal Computer","Virtual Public Cloud","Virtual Protected Cloud"],answer:"Virtual Private Cloud",explain:"Answer: Virtual Private Cloud **Explanation:** Amazon VPC (Virtual Private Cloud) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define."},{question:"Which AWS service provides scalable NoSQL database?",options:["RDS","DynamoDB","Redshift","Aurora"],answer:"DynamoDB",explain:"Answer: DynamoDB **Explanation:** Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability."},{question:"What AWS service is used for object caching?",options:["S3","EC2","ElastiCache","Lambda"],answer:"ElastiCache",explain:"Answer: ElastiCache **Explanation:** Amazon ElastiCache is a fully managed in-memory data store and cache service that supports popular open-source in-memory engines such as Redis and Memcached."},{question:"Which AWS service is used for analyzing data from various sources?",options:["Athena","Redshift","EMR","Glue"],answer:"Glue",explain:"Answer: Glue **Explanation:** AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy to prepare and load data for analytics from various sources."},{question:"What is the primary function of Amazon SNS?",options:["Serverless computing","Content delivery","Messaging service","Data warehousing"],answer:"Messaging service",explain:"Answer: Messaging service **Explanation:** Amazon SNS (Simple Notification Service) is a fully managed messaging service for coordinating the delivery of messages to subscribing endpoints and clients."},{question:"Which AWS service provides a fully managed Kubernetes service?",options:["ECS","EKS","Fargate","Lambda"],answer:"EKS",explain:"Answer: EKS **Explanation:** Amazon EKS (Elastic Kubernetes Service) is a fully managed Kubernetes service provided by AWS that allows you to run Kubernetes clusters without needing to install, operate, and maintain your own Kubernetes control plane or worker nodes."},{question:"What AWS service is used for data warehousing?",options:["Athena","Redshift","Glue","EMR"],answer:"Redshift",explain:"Answer: Redshift **Explanation:** Amazon Redshift is a fully managed data warehouse service that makes it simple and cost-effective to analyze all your data using standard SQL and your existing business intelligence tools."},{question:"Which AWS service is used for launching serverless applications?",options:["EC2","S3","Lambda","RDS"],answer:"Lambda",explain:"Answer: Lambda **Explanation:** AWS Lambda is a serverless computing service that lets you run code in response to events without provisioning or managing servers, making it ideal for building serverless applications."},{question:"What is the main function of Amazon CloudWatch?",options:["Real-time analytics","Monitoring and logging","Content delivery","Identity and access management"],answer:"Monitoring and logging",explain:"Answer: Monitoring and logging **Explanation:** Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights for AWS resources, applications, and services."},{question:"What AWS service is used for scalable and cost-effective data lakes?",options:["Athena","Redshift","Glue","EMR"],answer:"Glue",explain:"Answer: Glue **Explanation:** AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy to prepare and load data for analytics, including building scalable and cost-effective data lakes."},{question:"Which AWS service provides a managed Apache Hadoop framework?",options:["Athena","Redshift","Glue","EMR"],answer:"EMR",explain:"Answer: EMR **Explanation:** Amazon EMR (Elastic MapReduce) is a fully managed big data platform that simplifies running Apache Hadoop, Spark, HBase, Presto, and other open-source frameworks."},{question:"What AWS service is used for content delivery and acceleration?",options:["CloudFront","Route 53","API Gateway","Direct Connect"],answer:"CloudFront",explain:"Answer: CloudFront **Explanation:** Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds."},{question:"Which AWS service provides a managed relational database service?",options:["S3","DynamoDB","RDS","ElastiCache"],answer:"RDS",explain:"Answer: RDS **Explanation:** Amazon RDS (Relational Database Service) is a fully managed relational database service that makes it easier to set up, operate, and scale a relational database in the cloud."},{question:"What does SQS stand for in AWS?",options:["Simple Queue Service","Simple Query Service","Serverless Query Service","Secure Queue Service"],answer:"Simple Queue Service",explain:"Answer: Simple Queue Service **Explanation:** Amazon SQS (Simple Queue Service) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications."},{question:"Which AWS service is used for serverless computing?",options:["EC2","S3","Lambda","RDS"],answer:"Lambda",explain:"Answer: Lambda **Explanation:** AWS Lambda is a serverless computing service that lets you run code in response to events without provisioning or managing servers, making it ideal for serverless computing."},{question:"What is the maximum duration for a single AWS Lambda function invocation?",options:["15 minutes","5 minutes","60 minutes","30 minutes"],answer:"5 minutes",explain:"Answer: 5 minutes **Explanation:** The maximum duration for a single AWS Lambda function invocation is 5 minutes."},{question:"Which AWS service is designed to provide a fully managed Kafka-compatible event streaming platform?",options:["SQS","Kinesis","MSK","Glue"],answer:"MSK",explain:"Answer: MSK **Explanation:** Amazon Managed Streaming for Apache Kafka (MSK) is a fully managed service that enables you to build and run applications that use Apache Kafka to process streaming data."},{question:"What is the maximum number of rules allowed per security group in AWS?",options:["50","100","250","500"],answer:"250",explain:"Answer: 250 **Explanation:** The maximum number of rules allowed per security group in AWS is 250."},{question:"Which AWS service provides a fully managed graph database service?",options:["DynamoDB","Redshift","Neptune","ElastiCache"],answer:"Neptune",explain:"Answer: Neptune **Explanation:** Amazon Neptune is a fully managed graph database service that makes it easy to build and run applications that work with highly connected datasets."},{question:"What is the maximum number of tags allowed per resource in AWS?",options:["10","20","50","100"],answer:"50",explain:"Answer: 50 **Explanation:** The maximum number of tags allowed per resource in AWS is 50."},{question:"Which AWS service provides a fully managed service for running Microsoft SQL Server databases?",options:["Aurora","RDS","Redshift","DynamoDB"],answer:"RDS",explain:"Answer: RDS **Explanation:** Amazon RDS (Relational Database Service) provides a fully managed service for running Microsoft SQL Server databases in the cloud."},{question:"What is the maximum size of a single object that can be uploaded to Amazon S3 using a PUT request?",options:["5 TB","10 TB","1 TB","20 TB"],answer:"5 TB",explain:"Answer: 5 TB **Explanation:** The maximum size of a single object that can be uploaded to Amazon S3 using a PUT request is 5 terabytes (TB)."},{question:"Which AWS service is designed for real-time analytics and streaming data processing?",options:["Glue","Athena","EMR","Kinesis"],answer:"Kinesis",explain:"Answer: Kinesis **Explanation:** Amazon Kinesis is a platform for collecting, processing, and analyzing real-time streaming data at scale."},{question:"What is the maximum number of security groups allowed per network interface in AWS?",options:["5","10","25","50"],answer:"5",explain:"Answer: 5 **Explanation:** The maximum number of security groups allowed per network interface in AWS is 5."},{question:"Which AWS service provides a fully managed service for creating and managing relational databases?",options:["DynamoDB","RDS","Aurora","Redshift"],answer:"RDS",explain:"Answer: RDS **Explanation:** Amazon RDS (Relational Database Service) is a fully managed service that simplifies the process of setting up, operating, and scaling relational databases in the cloud."},{question:"Which AWS service is commonly used for deploying and managing containerized applications?",options:["ECS","RDS","Lambda","EKS"],answer:"ECS",explain:"Answer: ECS **Explanation:** Amazon ECS (Elastic Container Service) is commonly used for deploying and managing containerized applications in the AWS cloud."},{question:"What is the maximum number of rules allowed per security group in AWS?",options:["50","100","250","500"],answer:"250",explain:"Answer: 250 **Explanation:** The maximum number of rules allowed per security group in AWS is 250."},{question:"Which AWS service is designed to provide a fully managed Kafka-compatible event streaming platform?",options:["SQS","Kinesis","MSK","Glue"],answer:"MSK",explain:"Answer: MSK **Explanation:** Amazon Managed Streaming for Apache Kafka (MSK) is a fully managed service that enables you to build and run applications that use Apache Kafka to process streaming data."},{question:"What is the maximum number of tags allowed per resource in AWS?",options:["10","20","50","100"],answer:"50",explain:"Answer: 50 **Explanation:** The maximum number of tags allowed per resource in AWS is 50."},{question:"Which AWS service provides a fully managed graph database service?",options:["DynamoDB","Redshift","Neptune","ElastiCache"],answer:"Neptune",explain:"Answer: Neptune **Explanation:** Amazon Neptune is a fully managed graph database service that makes it easy to build and run applications that work with highly connected datasets."},{question:"What is the maximum size of a single object that can be uploaded to Amazon S3 using a PUT request?",options:["5 TB","10 TB","1 TB","20 TB"],answer:"5 TB",explain:"Answer: 5 TB **Explanation:** The maximum size of a single object that can be uploaded to Amazon S3 using a PUT request is 5 terabytes (TB)."},{question:"Which AWS service provides a fully managed service for running Microsoft SQL Server databases?",options:["Aurora","RDS","Redshift","DynamoDB"],answer:"RDS",explain:"Answer: RDS **Explanation:** Amazon RDS (Relational Database Service) provides a fully managed service for running Microsoft SQL Server databases in the cloud."},{question:"Which AWS service is designed for real-time analytics and streaming data processing?",options:["Glue","Athena","EMR","Kinesis"],answer:"Kinesis",explain:"Answer: Kinesis **Explanation:** Amazon Kinesis is a platform for collecting, processing, and analyzing real-time streaming data at scale."},{question:"What is the maximum number of security groups allowed per network interface in AWS?",options:["5","10","25","50"],answer:"5",explain:"Answer: 5 **Explanation:** The maximum number of security groups allowed per network interface in AWS is 5."},{question:"Which AWS service provides a fully managed service for creating and managing relational databases?",options:["DynamoDB","RDS","Aurora","Redshift"],answer:"RDS",explain:"Answer: RDS **Explanation:** Amazon RDS (Relational Database Service) is a fully managed service that simplifies the process of setting up, operating, and scaling relational databases in the cloud."},{question:"What is the maximum duration for a single AWS Lambda function invocation?",options:["15 minutes","5 minutes","60 minutes","30 minutes"],answer:"5 minutes",explain:"Answer: 5 minutes **Explanation:** The maximum duration for a single AWS Lambda function invocation is 5 minutes."},{question:"Which AWS service is designed to provide a fully managed Kafka-compatible event streaming platform?",options:["SQS","Kinesis","MSK","Glue"],answer:"MSK",explain:"Answer: MSK **Explanation:** Amazon Managed Streaming for Apache Kafka (MSK) is a fully managed service that enables you to build and run applications that use Apache Kafka to process streaming data."},{question:"What is the maximum number of rules allowed per security group in AWS?",options:["50","100","250","500"],answer:"250",explain:"Answer: 250 **Explanation:** The maximum number of rules allowed per security group in AWS is 250."},{question:"Which AWS service is designed to provide a fully managed Kafka-compatible event streaming platform?",options:["SQS","Kinesis","MSK","Glue"],answer:"MSK",explain:"Answer: MSK **Explanation:** Amazon Managed Streaming for Apache Kafka (MSK) is a fully managed service that enables you to build and run applications that use Apache Kafka to process streaming data."},{question:"What is the maximum number of tags allowed per resource in AWS?",options:["10","20","50","100"],answer:"50",explain:"Answer: 50 **Explanation:** The maximum number of tags allowed per resource in AWS is 50."},{question:"Which AWS service provides a fully managed graph database service?",options:["DynamoDB","Redshift","Neptune","ElastiCache"],answer:"Neptune",explain:"Answer: Neptune **Explanation:** Amazon Neptune is a fully managed graph database service that makes it easy to build and run applications that work with highly connected datasets."},{question:"What are the benefits of using Amazon Aurora compared to traditional relational databases?",options:["Lower cost and higher performance","Higher cost and lower performance","Higher latency and lower scalability","Lower security and higher complexity"],answer:"Lower cost and higher performance",explain:"Answer: Lower cost and higher performance **Explanation:** Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud, offering the performance and availability of commercial databases at a fraction of the cost."},{question:"Which AWS service provides automated code deployments to EC2 instances?",options:["AWS CodeDeploy","AWS CodeCommit","AWS CodePipeline","AWS CodeBuild"],answer:"AWS CodeDeploy",explain:"Answer: AWS CodeDeploy **Explanation:** AWS CodeDeploy is a fully managed deployment service that automates software deployments to a variety of compute services, including Amazon EC2 instances and AWS Lambda functions."},{question:"What is the purpose of AWS Organizations?",options:["To manage user authentication","To automate resource provisioning","To centrally manage and govern multiple AWS accounts","To monitor AWS service health"],answer:"To centrally manage and govern multiple AWS accounts",explain:"Answer: To centrally manage and govern multiple AWS accounts **Explanation:** AWS Organizations helps you centrally manage and govern your AWS environment as you grow and scale your workloads on AWS."},{question:"Which AWS service provides a fully managed message queuing service that supports both standard and FIFO queues?",options:["Amazon SQS","Amazon SNS","Amazon MQ","Amazon Kinesis"],answer:"Amazon SQS",explain:"Answer: Amazon SQS **Explanation:** Amazon SQS (Simple Queue Service) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications."},{question:"What is the main benefit of using Amazon CloudFront?",options:["Low-latency content delivery","Highly available database storage","Real-time data analytics","Serverless compute capacity"],answer:"Low-latency content delivery",explain:"Answer: Low-latency content delivery **Explanation:** Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency."},{question:"A company wants to create a learning application for students. The learning application must give students the option to choose a button to have the text read out loud to them. Which AWS machine learning service will meet this requirement?",options:["Amazon Polly","Amazon Comprehend","Amazon Rekognition","Amazon Transcribe"],answer:"Amazon Polly",explain:"Answer: Amazon Polly **Explanation:** Amazon Polly is a text-to-speech (TTS) service that converts text into lifelike speech. It allows developers to create applications that talk, enabling users to have text read out loud in multiple languages."},{question:"A company wants to establish a consistent and private connection from the company's on-premises data center to the AWS Cloud. Which AWS service will meet these requirements?",options:["Amazon Direct Connect","Amazon VPC","Amazon Route 53","Amazon EC2"],answer:"Amazon Direct Connect",explain:"Answer: Amazon Direct Connect **Explanation:** Amazon Direct Connect establishes a dedicated network connection from the customer's data center to AWS, providing a consistent and private connection for accessing AWS services without traversing the public internet."},{question:"A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3. Which AWS service can meet these requirements?",options:["Amazon GuardDuty","Amazon Inspector","Amazon Detective","Amazon Macie"],answer:"Amazon Macie",explain:"Answer: Amazon Macie **Explanation:** Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to automatically discover, classify, and protect sensitive data stored in Amazon S3."},{question:"A company requires a relational database on AWS that records new customer orders from a website. Which AWS service or feature will meet this requirement?",options:["Amazon S3","Amazon DynamoDB","Amazon RDS","Amazon Redshift"],answer:"Amazon RDS",explain:"Answer: Amazon RDS **Explanation:** Amazon RDS (Relational Database Service) is a fully managed relational database service that supports several database engines including MySQL, PostgreSQL, SQL Server, and Oracle. It is suitable for recording new customer orders from a website as it provides a relational database environment with features such as scalability, high availability, and automated backups."},{question:"Which AWS service allows customers to purchase unused Amazon EC2 capacity at an often discounted rate?",options:["Amazon EC2 Spot Instances","Amazon EC2 Reserved Instances","Amazon EC2 On-Demand Instances","Amazon EC2 Dedicated Hosts"],answer:"Amazon EC2 Spot Instances",explain:"Answer: Amazon EC2 Spot Instances **Explanation:** Amazon EC2 Spot Instances allow customers to purchase spare EC2 compute capacity at significantly lower prices compared to On-Demand instances. Spot Instances are well-suited for workloads that are flexible in terms of start and end times and can handle interruptions."},{question:"Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?",options:["Amazon GuardDuty","Amazon Inspector","AWS Config","Amazon Detective"],answer:"AWS Config",explain:"Answer: AWS Config **Explanation:** AWS Config continuously monitors and records configurations of AWS resources, including security groups. It provides insights into resource configuration changes, including identifying security groups that allow unrestricted access, helping users maintain compliance and security best practices."},{question:"A company needs to monitor and receive alerts about AWS Management Console sign-in events that involve the AWS account root user. Which AWS service can the company use to meet these requirements?",options:["Amazon CloudWatch","Amazon GuardDuty","AWS CloudTrail","AWS Config"],answer:"AWS CloudTrail",explain:"Answer: AWS CloudTrail **Explanation:** AWS CloudTrail provides a record of actions taken by a user, role, or AWS service in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs. It can be used to monitor AWS Management Console sign-in events, including those involving the AWS account root user, and receive alerts for such events."},{question:"What is the MINIMUM AWS Support plan that provides technical support through phone calls?",options:["Basic Support","Developer Support","Business Support","Enterprise Support"],answer:"Business Support",explain:"Answer: Business Support **Explanation:** Business Support is the minimum AWS Support plan that provides technical support through phone calls. It offers 24/7 access to AWS Trusted Advisor, AWS Support API, and phone support during business hours for account and billing support, as well as general technical support."},{question:"What is the MINIMUM AWS Support plan that provides technical support through phone calls?",options:["Basic Support","Developer Support","Business Support","Enterprise Support"],answer:"Business Support",explain:"Answer: Business Support **Explanation:** Business Support is the minimum AWS Support plan that provides technical support through phone calls. It offers 24/7 access to AWS Trusted Advisor, AWS Support API, and phone support during business hours for account and billing support, as well as general technical support."}];n(39);var A=e=>{let{score:a}=e;const[n,s]=Object(t.useState)(0),i=5*(a-1);return Object(t.useEffect)((()=>{const e=()=>{n<i&&setTimeout((()=>{s(n+1)}),100)};return e(),()=>{clearTimeout(e)}}),[n,i]),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"saucer",style:{left:"".concat(40+n,"%"),zIndex:1},children:Object(r.jsx)("h2",{children:"\ud83d\udef8"})}),Object(r.jsx)("span",{className:"robot",style:{left:"".concat(85,"%"),zIndex:1},children:Object(r.jsx)("h2",{children:"\ud83e\udd16"})})]})};var x=function(){function e(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.length,a=Math.random()*e;return a=Math.floor(a),a}const[a,n]=Object(t.useState)(e()),[s,i]=Object(t.useState)(0),[o,l]=Object(t.useState)(0),[c,u]=Object(t.useState)(!1),[d,p]=Object(t.useState)(""),[m,h]=Object(t.useState)(null);return Object(r.jsx)("div",{className:"Quiz",children:c?Object(r.jsxs)("div",{className:"score-section",children:["You scored ",o," out of ",10,". The minimum passing score is 75%",o>=7.5?Object(r.jsx)("h2",{children:"Congratulations, you have passed"}):Object(r.jsx)("h2",{children:"Better luck next time."})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"question-section",children:[Object(r.jsxs)("div",{className:"question-count",children:[Object(r.jsxs)("h2",{className:"my-5 text-center",children:["Practice quiz (",a," of ",b.length,") "]}),Object(r.jsxs)("span",{children:["Question ",s+1]}),"/",10]}),Object(r.jsxs)("div",{className:"question-text",children:[" ",b[a].question]}),Object(r.jsx)(A,{score:o,currentMax:10})," "]}),Object(r.jsx)("div",{className:"answer-section",children:b[a].options.map((t=>Object(r.jsx)("button",{onClick:()=>(t=>{h(null),p("");const r=b[a].answer;p(t),t===r?(l(o+1),h(!0)):h(!1),setTimeout((()=>{h(null),p("");const t=e(),o=s+1;a!==b.length-1?o<10?(n(t),i(o),h(null),p("")):u(!0):(n(e()),i(o),h(null),p(""))}),2e3)})(t),style:{backgroundColor:d===t?m?"lightgreen":"pink":""},children:t},t)))}),d&&Object(r.jsxs)("div",{style:{marginTop:"10px"},children:[m?"Correct! \ud83c\udf89":"Sorry, that\u2019s not right. \ud83d\ude22",Object(r.jsx)("div",{className:"explain-text",children:b[a].explain})]})]})})};var f=()=>Object(r.jsxs)("div",{className:"hello",children:[Object(r.jsx)("h2",{className:"my-5 text-center",children:"About Us"}),Object(r.jsx)("p",{children:"Cloud Heroes is a fun app on the cloud with exciting quizzes. We focus on simple and thrilling gameplay, along with top-notch quizzes. Our quizzes are user-friendly and enjoyable, making learning fun."})]});var w=()=>Object(r.jsx)("div",{className:"hello",children:Object(r.jsx)("h2",{className:"my-5 text-center",children:"Exam"})});var y=()=>Object(r.jsxs)("div",{className:"hello",children:[Object(r.jsx)("h2",{className:"my-5 text-center",children:"Resources"}),Object(r.jsxs)("p",{children:['Where can you get started with Hands-On \u2728"AWS Projects"\u2728??',Object(r.jsx)("p",{children:"Here are some resources :"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://aws.amazon.com/getting-started/",children:"AWS Getting Started Resource Centre"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://workshops.aws/",children:"AWS Workshops"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://aws.amazon.com/education/awseducate/",children:"AWS Educate"})})]}),"Happy Building"]})]});var j=()=>Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"External API"}),Object(r.jsxs)("p",{children:["You use will use a button to call an external API using an access token, and the API will validate it using the API's audience value.",Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"This route should be protected"}),"."]}),Object(r.jsxs)("div",{className:"btn-group mt-5",role:"group","aria-label":"External API Requests Examples",children:[Object(r.jsx)("button",{type:"button",className:"btn btn-primary",children:"Get Public Message"}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary",children:"Get Protected Message"})]}),"test"(Object(r.jsxs)("div",{className:"mt-5",children:[Object(r.jsx)("h6",{className:"muted",children:"Result"}),Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("code",{className:"col-12 text-light bg-dark p-4",children:JSON.stringify("test",null,2)})})})]}))]});var W=()=>Object(r.jsx)(t.Fragment,{children:Object(r.jsx)(l,{})}),E=n(43),C=n(44),O=n(45);var z=()=>{const{user:e}=Object(p.b)();return Object(r.jsx)(E.a,{className:"mb-5",children:Object(r.jsxs)(C.a,{className:"align-items-center profile-header mb-5 text-center text-md-left",children:[Object(r.jsx)(O.a,{md:2,children:Object(r.jsx)("img",{src:e.picture,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})}),Object(r.jsxs)(O.a,{md:!0,children:[Object(r.jsx)("h2",{children:e.name}),Object(r.jsx)("p",{className:"lead text-muted",children:e.email})]})]})})};var D=()=>Object(r.jsx)(t.Fragment,{children:Object(r.jsx)(x,{})});var q=()=>Object(r.jsx)(t.Fragment,{children:Object(r.jsx)(f,{})});var k=()=>Object(r.jsx)(t.Fragment,{children:Object(r.jsx)(w,{})});var R=()=>Object(r.jsx)(t.Fragment,{children:Object(r.jsx)(y,{})});n(40);var N=()=>Object(r.jsxs)("div",{id:"app",className:"d-flex flex-column h-100",children:[Object(r.jsx)(v,{}),Object(r.jsx)("div",{className:"container flex-grow-1",children:Object(r.jsx)("div",{className:"mt-5",children:Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{path:"/",exact:!0,component:W}),Object(r.jsx)(o.a,{path:"/dev.cloud-heroes",exact:!0,component:W}),Object(r.jsx)(o.a,{path:"/quiz",component:D}),Object(r.jsx)(o.a,{path:"/profile",component:z}),Object(r.jsx)(o.a,{path:"/external-api",component:j}),Object(r.jsx)(o.a,{path:"/about",component:q}),Object(r.jsx)(o.a,{path:"/exam",component:k}),Object(r.jsx)(o.a,{path:"/resources",component:R})]})})}),Object(r.jsx)(u,{})]}),M=n(15);var K=n(5),I=Object(K.a)();const T={domain:M.domain,clientId:M.clientId},L={domain:T.domain,clientId:T.clientId,redirectUri:window.location.origin,onRedirectCallback:e=>{I.push(e&&e.returnTo?e.returnTo:window.location.pathname)}};i.a.render(Object(r.jsx)(p.a,{...L,children:Object(r.jsx)(d.a,{children:Object(r.jsx)(N,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.10fe618c.chunk.js.map