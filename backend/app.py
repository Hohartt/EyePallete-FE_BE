from flask import Flask
from flask_cors import CORS
import datetime
import os
from time import sleep

app = Flask(__name__)
CORS(app, resources={r'*': {'origins': '*'}})

# 여기서 메모장 로드
@app.route('/')
def main():
    d = datetime.datetime.now()
    year = str(d.year)
    month = '0'+str(d.month)
    day = '0'+str(d.day)
    noonOrnight = '오전' if d.hour<=12 else '오후'
    hour = str(d.hour) if d.hour<=12 else str(d.hour-12)
    minute = str(d.minute)
    l=[]
    k = year + '-' + month + '-' + day + '_' + noonOrnight+' '+ hour + '_' + minute
    k_2= '2022-05-23_오전 11_07'
    filePath=os.path.join('C:\MAVE_RawData', k, 'FP1_FFT.txt')
    l = []
    with open(filePath, "r") as f:
        f.seek(0)
        while True:
            where = f.tell()
            line = f.readline().strip()
            if not line:
                sleep(0.1)
                delay_time += 0.1
                f.seek(where)
                if delay_time > 10.0:  # 10초 이상 지연되면 파일 출력이 끝난 것으로 간주
                    break
            else:
                delay_time = 0. # reset delay time
                print(line)  # already has newline
            return { 'line' : line }

@app.route('/first')
def first_request():
    return {"value": "13HZ"}

@app.route('/second')
def second_request():
    return {"value": "17HZ"}


if __name__ == '__main__':
    app.run(debug=True)
