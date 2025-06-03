# Stage 1: Build the Angular app
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Remove default config
RUN rm -rf /etc/nginx/conf.d/default.conf

# Copy built files
COPY --from=build /app/dist/remote-angular/browser/ /usr/share/nginx/html/

# Copy custom config
COPY nginx.conf /etc/nginx/conf.d/

# Set proper permissions (nginx user needs read access)
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html && \
    # Ensure Nginx can read all files
    find /usr/share/nginx/html -type f -exec chmod 644 {} \; && \
    find /usr/share/nginx/html -type d -exec chmod 755 {} \;

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# docker build -t remote-angular .
# docker run -d --name test-angular -p 8080:80 remote-angular
