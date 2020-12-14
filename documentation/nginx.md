# NGINX: Proxy reverse

[README.md](../README.md)

```bash
# Open
$ nano /etc/nginx/sites-available/api.conf

# Insert
server {
        server_name api.namedomain.com.br; # SUBDOMAIN
        listen 127.0.0.1:80; # FOR VARNISH, PORT IS 8080

        location /nginx_status {
            #stub_status on; # NOT TESTED
            #server_tokens off; # NOT TESTED
            access_log off;
            allow 127.0.0.1;
            deny all;
        }

        location / {
            proxy_pass http://127.0.0.1:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_cache_bypass $http_upgrade;
        }
}

# Create symbolic link
$ cd /etc/nginx/sites-enabled && ln -s ../sites-available/api.conf
```
