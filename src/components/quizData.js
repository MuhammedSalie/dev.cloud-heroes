const quizData = [
  {
    question: "What does EC2 stand for in AWS?",
    options: ["Elastic Container Service", "Elastic Compute Cloud", "Elastic Cache", "Elastic Container Cloud"],
    answer: "Elastic Compute Cloud",
    explain: "Answer: Elastic Compute Cloud Explanation: According to AWS documentation, EC2 stands for Elastic Compute Cloud, which is a web service that provides resizable compute capacity in the cloud."
    },
    {
    question: "Which AWS service is used for object storage?",
    options: ["RDS", "S3", "EC2", "Lambda"],
    answer: "S3",
    explain: "Answer: S3 Explanation: Amazon S3 (Simple Storage Service) is an object storage service offered by AWS. It is commonly used for storing and retrieving large amounts of data."
    },
    {
    question: "What is the primary function of Amazon RDS?",
    options: ["Content Delivery Network", "Database service", "File storage", "Virtual private server"],
    answer: "Database service",
    explain: "Answer: Database service Explanation: Amazon RDS (Relational Database Service) is a managed relational database service that makes it easier to set up, operate, and scale a relational database in the cloud."
    },
    {
    question: "Which AWS service allows you to run code without provisioning or managing servers?",
    options: ["EC2", "S3", "Lambda", "DynamoDB"],
    answer: "Lambda",
    explain: "Answer: Lambda Explanation: AWS Lambda is a serverless computing service that lets you run code in response to events without provisioning or managing servers."
    },
    {
    question: "What does S3 stand for in AWS?",
    options: ["Simple Storage Service", "Server Storage Service", "Secure Storage Service", "Scalable Storage Service"],
    answer: "Simple Storage Service",
    explain: "Answer: Simple Storage Service Explanation: Amazon S3 (Simple Storage Service) provides object storage through a web interface. It is designed to store and retrieve any amount of data from anywhere on the web."
    },
    {
    question: "Which AWS service is commonly used for scalable message queuing?",
    options: ["SQS", "SNS", "RDS", "ECS"],
    answer: "SQS",
    explain: "Answer: SQS Explanation: Amazon SQS (Simple Queue Service) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications."
    },
    {
    question: "What AWS service is used for deploying and managing containerized applications?",
    options: ["ECS", "RDS", "Lambda", "DynamoDB"],
    answer: "ECS",
    explain: "Answer: ECS Explanation: Amazon ECS (Elastic Container Service) is a fully managed container orchestration service that allows you to run, stop, and manage Docker containers on a cluster."
    },
    {
    question: "What is the main benefit of using CloudFront in AWS?",
    options: ["Secure data storage", "Scalable database management", "Low-latency content delivery", "Real-time analytics"],
    answer: "Low-latency content delivery",
    explain: "Answer: Low-latency content delivery Explanation: AWS CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency."
    },
    {
    question: "Which AWS service is used for launching and managing virtual servers in the cloud?",
    options: ["EC2", "S3", "RDS", "Lambda"],
    answer: "EC2",
    explain: "Answer: EC2 Explanation: Amazon EC2 (Elastic Compute Cloud) is a web service that provides resizable compute capacity in the cloud. It allows you to launch and manage virtual servers, known as instances."
    },
    {
    question: "What is the main function of AWS IAM?",
    options: ["Data warehousing", "Identity and access management", "Content delivery", "Network security"],
    answer: "Identity and access management",
    explain: "Answer: Identity and access management Explanation: AWS IAM (Identity and Access Management) is a web service for securely controlling access to AWS services and resources. It enables you to manage users, groups, roles, and permissions."
    },
    {
    question: "Which AWS service is used for serverless data processing?",
    options: ["EMR", "Glue", "Kinesis", "Athena"],
    answer: "Glue",
    explain: "Answer: Glue Explanation: AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy to prepare and load data for analytics. It is serverless and automatically provisions the infrastructure needed to run your ETL jobs."
    },
    {
    question: "What AWS service provides managed Kubernetes clusters?",
    options: ["ECS", "EKS", "Fargate", "Lambda"],
    answer: "EKS",
    explain: "Answer: EKS Explanation: Amazon EKS (Elastic Kubernetes Service) is a fully managed Kubernetes service provided by AWS. It allows you to run Kubernetes clusters without needing to install, operate, and maintain your own Kubernetes control plane or worker nodes."
    },
    {
    question: "What is the main benefit of using AWS Lambda?",
    options: ["Reduced cost of infrastructure management", "Increased scalability of applications", "Simplified deployment process", "Improved security of data storage"],
    answer: "Reduced cost of infrastructure management",
    explain: "Answer: Reduced cost of infrastructure management Explanation: AWS Lambda is a serverless computing service that lets you run code in response to events without provisioning or managing servers. It helps reduce infrastructure management costs by automatically scaling resources based on demand."
    },
    {
    question: "What AWS service is used for real-time streaming data processing?",
    options: ["Kinesis", "SQS", "SNS", "Glue"],
    answer: "Kinesis",
    explain: "Answer: Kinesis Explanation: Amazon Kinesis is a platform for collecting, processing, and analyzing real-time streaming data at scale. It allows you to ingest data from various sources, process it in real-time, and store it for further analysis."
    },
    {
    question: "Which AWS service is commonly used for building machine learning models?",
    options: ["SageMaker", "Redshift", "Glue", "Neptune"],
    answer: "SageMaker",
    explain: "Answer: SageMaker Explanation: Amazon SageMaker is a fully managed service that enables data scientists and developers to build, train, and deploy machine learning models at scale. It provides built-in algorithms, Jupyter notebooks, and managed infrastructure for machine learning workflows."
    },
{  "question": "What does VPC stand for in AWS?",
  "options": ["Virtual Private Cloud", "Virtual Personal Computer", "Virtual Public Cloud", "Virtual Protected Cloud"],
  "answer": "Virtual Private Cloud",
  "explain": "Answer: Virtual Private Cloud **Explanation:** Amazon VPC (Virtual Private Cloud) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define."
},
{
  "question": "Which AWS service provides scalable NoSQL database?",
  "options": ["RDS", "DynamoDB", "Redshift", "Aurora"],
  "answer": "DynamoDB",
  "explain": "Answer: DynamoDB **Explanation:** Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability."
},
{
  "question": "What AWS service is used for object caching?",
  "options": ["S3", "EC2", "ElastiCache", "Lambda"],
  "answer": "ElastiCache",
  "explain": "Answer: ElastiCache **Explanation:** Amazon ElastiCache is a fully managed in-memory data store and cache service that supports popular open-source in-memory engines such as Redis and Memcached."
},
{
  "question": "Which AWS service is used for analyzing data from various sources?",
  "options": ["Athena", "Redshift", "EMR", "Glue"],
  "answer": "Glue",
  "explain": "Answer: Glue **Explanation:** AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy to prepare and load data for analytics from various sources."
},
{
  "question": "What is the primary function of Amazon SNS?",
  "options": ["Serverless computing", "Content delivery", "Messaging service", "Data warehousing"],
  "answer": "Messaging service",
  "explain": "Answer: Messaging service **Explanation:** Amazon SNS (Simple Notification Service) is a fully managed messaging service for coordinating the delivery of messages to subscribing endpoints and clients."
},
{
  "question": "Which AWS service provides a fully managed Kubernetes service?",
  "options": ["ECS", "EKS", "Fargate", "Lambda"],
  "answer": "EKS",
  "explain": "Answer: EKS **Explanation:** Amazon EKS (Elastic Kubernetes Service) is a fully managed Kubernetes service provided by AWS that allows you to run Kubernetes clusters without needing to install, operate, and maintain your own Kubernetes control plane or worker nodes."
},
{
  "question": "What AWS service is used for data warehousing?",
  "options": ["Athena", "Redshift", "Glue", "EMR"],
  "answer": "Redshift",
  "explain": "Answer: Redshift **Explanation:** Amazon Redshift is a fully managed data warehouse service that makes it simple and cost-effective to analyze all your data using standard SQL and your existing business intelligence tools."
},
{
  "question": "Which AWS service is used for launching serverless applications?",
  "options": ["EC2", "S3", "Lambda", "RDS"],
  "answer": "Lambda",
  "explain": "Answer: Lambda **Explanation:** AWS Lambda is a serverless computing service that lets you run code in response to events without provisioning or managing servers, making it ideal for building serverless applications."
},
{
  "question": "What is the main function of Amazon CloudWatch?",
  "options": ["Real-time analytics", "Monitoring and logging", "Content delivery", "Identity and access management"],
  "answer": "Monitoring and logging",
  "explain": "Answer: Monitoring and logging **Explanation:** Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights for AWS resources, applications, and services."
},
{
  "question": "What AWS service is used for scalable and cost-effective data lakes?",
  "options": ["Athena", "Redshift", "Glue", "EMR"],
  "answer": "Glue",
  "explain": "Answer: Glue **Explanation:** AWS Glue is a fully managed extract, transform, and load (ETL) service that makes it easy to prepare and load data for analytics, including building scalable and cost-effective data lakes."
},
{
  "question": "Which AWS service provides a managed Apache Hadoop framework?",
  "options": ["Athena", "Redshift", "Glue", "EMR"],
  "answer": "EMR",
  "explain": "Answer: EMR **Explanation:** Amazon EMR (Elastic MapReduce) is a fully managed big data platform that simplifies running Apache Hadoop, Spark, HBase, Presto, and other open-source frameworks."
},
{
  "question": "What AWS service is used for content delivery and acceleration?",
  "options": ["CloudFront", "Route 53", "API Gateway", "Direct Connect"],
  "answer": "CloudFront",
  "explain": "Answer: CloudFront **Explanation:** Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds."
},
{
  "question": "Which AWS service provides a managed relational database service?",
  "options": ["S3", "DynamoDB", "RDS", "ElastiCache"],
  "answer": "RDS",
  "explain": "Answer: RDS **Explanation:** Amazon RDS (Relational Database Service) is a fully managed relational database service that makes it easier to set up, operate, and scale a relational database in the cloud.",
},
{
  "question": "What does SQS stand for in AWS?",
  "options": ["Simple Queue Service", "Simple Query Service", "Serverless Query Service", "Secure Queue Service"],
  "answer": "Simple Queue Service",
  "explain": "Answer: Simple Queue Service **Explanation:** Amazon SQS (Simple Queue Service) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications."
},
{
  "question": "Which AWS service is used for serverless computing?",
  "options": ["EC2", "S3", "Lambda", "RDS"],
  "answer": "Lambda",
  "explain": "Answer: Lambda **Explanation:** AWS Lambda is a serverless computing service that lets you run code in response to events without provisioning or managing servers, making it ideal for serverless computing."
}
];
  
  export default quizData;
  