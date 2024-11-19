FROM node
WORKDIR /app
# 도커에 미리 package.json과 전체 디렉토리 파일을 카피한다
# 그리고 이것들을 캐싱해서
# 바뀐게 있는지 감지한다.
# 바뀐게 있을 때만 npm install을 한다
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]