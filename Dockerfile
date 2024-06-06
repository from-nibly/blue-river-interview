FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY index.html /usr/share/nginx/html/index.html
COPY slides.md /usr/share/nginx/html/slides.md
COPY media /usr/share/nginx/html/media