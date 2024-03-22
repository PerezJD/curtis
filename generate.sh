for file in data/pages/*.json
do
    name=${file##*/}
    base=${name%.json}
    echo $base
    curl http://localhost:3000/${base} >> ./public/${base}.html
done
