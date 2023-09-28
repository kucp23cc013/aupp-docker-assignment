1.  kubectl apply -f nodejs-deployment.yaml
2.  kubectl apply -f nodejs-service.yaml
3.  kubectl port-forward service/nodejs-service 3000:3000
