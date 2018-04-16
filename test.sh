echo "POST WORKS"
curl -H "Content-Type: application/json" -X POST -d '{"hello":"world is a cruel place"}' http://localhost:3000/
echo
echo "GET WORKS"
curl -H "Content-Type: application/json" -X GET -d '{"hello":"world is a cruel place"}' http://localhost:3000/
echo
echo "POST FAILS"
curl -H "Content-Type: application/json" -X POST -d '{"hello":"world is a cruel place"}' http://localhost:3000/12
echo
echo "GET FAILS"
curl -H "Content-Type: application/json" -X GET -d '{"hello":"world is a cruel place"}' http://localhost:3000/12