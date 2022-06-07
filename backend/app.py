import numbers
from flask import Flask, Response
from flask_cors import CORS
import datetime
import os
from time import sleep

app = Flask(__name__)
CORS(app, resources={r'*': {'origins': '*'}})

all_lines = [] # 2차원 배열 선언

# Time	0.00Hz	0.20Hz	0.40Hz	0.60Hz	0.80Hz	1.00Hz	1.20Hz	1.40Hz	1.60Hz	1.80Hz	2.00Hz	2.20Hz	2.40Hz	2.60Hz	2.80Hz	3.00Hz	3.20Hz	3.40Hz	3.60Hz	3.80Hz	4.00Hz	4.20Hz	4.40Hz	4.60Hz	4.80Hz	5.00Hz	5.20Hz	5.40Hz	5.60Hz	5.80Hz	6.00Hz	6.20Hz	6.40Hz	6.60Hz	6.80Hz	7.00Hz	7.20Hz	7.40Hz	7.60Hz	7.80Hz	8.00Hz	8.20Hz	8.40Hz	8.60Hz	8.80Hz	9.00Hz	9.20Hz	9.40Hz	9.60Hz	9.80Hz	10.00Hz	10.20Hz	10.40Hz	10.60Hz	10.80Hz	11.00Hz	11.20Hz	11.40Hz	11.60Hz	11.80Hz	12.00Hz	12.20Hz	12.40Hz	12.60Hz	12.80Hz	13.00Hz	13.20Hz	13.40Hz	13.60Hz	13.80Hz	14.00Hz	14.20Hz	14.40Hz	14.60Hz	14.80Hz	15.00Hz	15.20Hz	15.40Hz	15.60Hz	15.80Hz	16.00Hz	16.20Hz	16.40Hz	16.60Hz	16.80Hz	17.00Hz	17.20Hz	17.40Hz	17.60Hz	17.80Hz	18.00Hz	18.20Hz	18.40Hz	18.60Hz	18.80Hz	19.00Hz	19.20Hz	19.40Hz	19.60Hz	19.80Hz	20.00Hz	20.20Hz	20.40Hz	20.60Hz	20.80Hz	21.00Hz	21.20Hz	21.40Hz	21.60Hz	21.80Hz	22.00Hz	22.20Hz	22.40Hz	22.60Hz	22.80Hz	23.00Hz	23.20Hz	23.40Hz	23.60Hz	23.80Hz	24.00Hz	24.20Hz	24.40Hz	24.60Hz	24.80Hz	25.00Hz	25.20Hz	25.40Hz	25.60Hz	25.80Hz	26.00Hz	26.20Hz	26.40Hz	26.60Hz	26.80Hz	27.00Hz	27.20Hz	27.40Hz	27.60Hz	27.80Hz	28.00Hz	28.20Hz	28.40Hz	28.60Hz	28.80Hz	29.00Hz	29.20Hz	29.40Hz	29.60Hz	29.80Hz	30.00Hz	30.20Hz	30.40Hz	30.60Hz	30.80Hz	31.00Hz	31.20Hz	31.40Hz	31.60Hz	31.80Hz	32.00Hz	32.20Hz	32.40Hz	32.60Hz	32.80Hz	33.00Hz	33.20Hz	33.40Hz	33.60Hz	33.80Hz	34.00Hz	34.20Hz	34.40Hz	34.60Hz	34.80Hz	35.00Hz	35.20Hz	35.40Hz	35.60Hz	35.80Hz	36.00Hz	36.20Hz	36.40Hz	36.60Hz	36.80Hz	37.00Hz	37.20Hz	37.40Hz	37.60Hz	37.80Hz	38.00Hz	38.20Hz	38.40Hz	38.60Hz	38.80Hz	39.00Hz	39.20Hz	39.40Hz	39.60Hz	39.80Hz	40.00Hz	40.20Hz	40.40Hz	40.60Hz	40.80Hz	41.00Hz	41.20Hz	41.40Hz	41.60Hz	41.80Hz	42.00Hz	42.20Hz	42.40Hz	42.60Hz	42.80Hz	43.00Hz	43.20Hz	43.40Hz	43.60Hz	43.80Hz	44.00Hz	44.20Hz	44.40Hz	44.60Hz	44.80Hz	45.00Hz	45.20Hz	45.40Hz	45.60Hz	45.80Hz	46.00Hz	46.20Hz	46.40Hz	46.60Hz	46.80Hz	47.00Hz	47.20Hz	47.40Hz	47.60Hz	47.80Hz	48.00Hz	48.20Hz	48.40Hz	48.60Hz	48.80Hz	49.00Hz	49.20Hz	49.40Hz	49.60Hz	49.80Hz	50.00Hz	50.20Hz	50.40Hz	50.60Hz	50.80Hz	51.00Hz	51.20Hz	51.40Hz	51.60Hz	51.80Hz	52.00Hz	52.20Hz	52.40Hz	52.60Hz	52.80Hz	53.00Hz	53.20Hz	53.40Hz	53.60Hz	53.80Hz	54.00Hz	54.20Hz	54.40Hz	54.60Hz	54.80Hz	55.00Hz	55.20Hz	55.40Hz	55.60Hz	55.80Hz	56.00Hz	56.20Hz	56.40Hz	56.60Hz	56.80Hz	57.00Hz	57.20Hz	57.40Hz	57.60Hz	57.80Hz	58.00Hz	58.20Hz	58.40Hz	58.60Hz	58.80Hz	59.00Hz	59.20Hz	59.40Hz	59.60Hz	59.80Hz	60.00Hz	60.20Hz	60.40Hz	60.60Hz	60.80Hz	61.00Hz	61.20Hz	61.40Hz	61.60Hz	61.80Hz	62.00Hz	62.20Hz	62.40Hz	62.60Hz	62.80Hz	63.00Hz	63.20Hz	63.40Hz	63.60Hz	63.80Hz	64.00Hz	64.20Hz	64.40Hz	64.60Hz	64.80Hz	65.00Hz	65.20Hz	65.40Hz	65.60Hz	65.80Hz	66.00Hz	66.20Hz	66.40Hz	66.60Hz	66.80Hz	67.00Hz	67.20Hz	67.40Hz	67.60Hz	67.80Hz	68.00Hz	68.20Hz	68.40Hz	68.60Hz	68.80Hz	69.00Hz	69.20Hz	69.40Hz	69.60Hz	69.80Hz	70.00Hz	70.20Hz	70.40Hz	70.60Hz	70.80Hz	71.00Hz	71.20Hz	71.40Hz	71.60Hz	71.80Hz	72.00Hz	72.20Hz	72.40Hz	72.60Hz	72.80Hz	73.00Hz	73.20Hz	73.40Hz	73.60Hz	73.80Hz	74.00Hz	74.20Hz	74.40Hz	74.60Hz	74.80Hz	75.00Hz	75.20Hz	75.40Hz	75.60Hz	75.80Hz	76.00Hz	76.20Hz	76.40Hz	76.60Hz	76.80Hz	77.00Hz	77.20Hz	77.40Hz	77.60Hz	77.80Hz	78.00Hz	78.20Hz	78.40Hz	78.60Hz	78.80Hz	79.00Hz	79.20Hz	79.40Hz	79.60Hz	79.80Hz	80.00Hz	80.20Hz	80.40Hz	80.60Hz	80.80Hz	81.00Hz	81.20Hz	81.40Hz	81.60Hz	81.80Hz	82.00Hz	82.20Hz	82.40Hz	82.60Hz	82.80Hz	83.00Hz	83.20Hz	83.40Hz	83.60Hz	83.80Hz	84.00Hz	84.20Hz	84.40Hz	84.60Hz	84.80Hz	85.00Hz	85.20Hz	85.40Hz	85.60Hz	85.80Hz	86.00Hz	86.20Hz	86.40Hz	86.60Hz	86.80Hz	87.00Hz	87.20Hz	87.40Hz	87.60Hz	87.80Hz	88.00Hz	88.20Hz	88.40Hz	88.60Hz	88.80Hz	89.00Hz	89.20Hz	89.40Hz	89.60Hz	89.80Hz	90.00Hz	90.20Hz	90.40Hz	90.60Hz	90.80Hz	91.00Hz	91.20Hz	91.40Hz	91.60Hz	91.80Hz	92.00Hz	92.20Hz	92.40Hz	92.60Hz	92.80Hz	93.00Hz	93.20Hz	93.40Hz	93.60Hz	93.80Hz	94.00Hz	94.20Hz	94.40Hz	94.60Hz	94.80Hz	95.00Hz	95.20Hz	95.40Hz	95.60Hz	95.80Hz	96.00Hz	96.20Hz	96.40Hz	96.60Hz	96.80Hz	97.00Hz	97.20Hz	97.40Hz	97.60Hz	97.80Hz	98.00Hz	98.20Hz	98.40Hz	98.60Hz	98.80Hz	99.00Hz	99.20Hz	99.40Hz	99.60Hz	99.80Hz	100.00Hz	100.20Hz	100.40Hz	100.60Hz	100.80Hz	101.00Hz	101.20Hz	101.40Hz	101.60Hz	101.80Hz	102.00Hz	102.20Hz	102.40Hz	102.60Hz	102.80Hz	103.00Hz	103.20Hz	103.40Hz	103.60Hz	103.80Hz	104.00Hz	104.20Hz	104.40Hz	104.60Hz	104.80Hz	105.00Hz	105.20Hz	105.40Hz	105.60Hz	105.80Hz	106.00Hz	106.20Hz	106.40Hz	106.60Hz	106.80Hz	107.00Hz	107.20Hz	107.40Hz	107.60Hz	107.80Hz	108.00Hz	108.20Hz	108.40Hz	108.60Hz	108.80Hz	109.00Hz	109.20Hz	109.40Hz	109.60Hz	109.80Hz	110.00Hz	110.20Hz	110.40Hz	110.60Hz	110.80Hz	111.00Hz	111.20Hz	111.40Hz	111.60Hz	111.80Hz	112.00Hz	112.20Hz	112.40Hz	112.60Hz	112.80Hz	113.00Hz	113.20Hz	113.40Hz	113.60Hz	113.80Hz	114.00Hz	114.20Hz	114.40Hz	114.60Hz	114.80Hz	115.00Hz	115.20Hz	115.40Hz	115.60Hz	115.80Hz	116.00Hz	116.20Hz	116.40Hz	116.60Hz	116.80Hz	117.00Hz	117.20Hz	117.40Hz	117.60Hz	117.80Hz	118.00Hz	118.20Hz	118.40Hz	118.60Hz	118.80Hz	119.00Hz	119.20Hz	119.40Hz	119.60Hz	119.80Hz	120.00Hz	120.20Hz	120.40Hz	120.60Hz	120.80Hz	121.00Hz	121.20Hz	121.40Hz	121.60Hz	121.80Hz	122.00Hz	122.20Hz	122.40Hz	122.60Hz	122.80Hz	123.00Hz	123.20Hz	123.40Hz	123.60Hz	123.80Hz	124.00Hz	124.20Hz	124.40Hz	124.60Hz	124.80Hz	125.00Hz	125.20Hz	125.40Hz	125.60Hz	125.80Hz	126.00Hz	126.20Hz	126.40Hz	126.60Hz	126.80Hz	127.00Hz	127.20Hz	127.40Hz	127.60Hz	127.80Hz

# 영역별 배열 얼마나 썼는지 자름
arr_cutting = 0

# 13,19,23 hz 중립평균
avg_13hz = 0.0
avg19hz = 0.0 
avg23hz = 0.0

# 13, 19, 23 index
idx_13hz = 0
idx_19hz = 0
idx_23hz = 0

# 13, 19, 23 sum
sum_13hz = 0.0 
sum_19hz = 0.0
sum_23hz = 0.0


# 여기서 메모장 로드
@app.route('/')
def main():
    d = datetime.datetime.now()
    year = str(d.year)
    month = '0'+str(d.month)
    day = '0'+str(d.day)
    noonOrnight = '오전' if d.hour<=12 else '오후'
    hour = str(d.hour) if d.hour<=12 else str(d.hour-12)
    minute = '0'+str(d.minute) if d.minute<=9 else str(d.minute)
    k = year + '-' + month + '-' + day + '_' + noonOrnight+' '+ hour + '_' + minute
    filePath=os.path.join('C:\MAVE_RawData', k, 'FP1_FFT.txt')
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
                temp = line.split('\t')
                all_lines.append(list(temp))

@app.route('/mid_average')
def mid_request():
    for i in range(3841):
        if all_lines[0][i] == '13.00Hz':
            idx_13hz = i
        if all_lines[0][i] == '19.00Hz':
            idx_19hz = i
        if all_lines[0][i] == '23.00Hz':
            idx_23hz = i
            break
    # for i in range(1, len(all_lines)):
    #     sum_13hz += float(all_lines[i][idx_13hz])
    #     sum_19hz += float(all_lines[i][idx_19hz])
    #     sum_23hz += float(all_lines[i][idx_23hz])
    
    # avg_13hz = sum_13hz / len(all_lines)
    # avg_19hz = sum_19hz / len(all_lines)
    # avg_23hz = sum_23hz / len(all_lines)
    # print(avg_13hz, avg_19hz, avg_23hz)

    return {"result" : {
        # '13hz 중립' : avg_13hz,
        # '19hz 중립' : avg_19hz,
        # '23hz 중립' : avg_23hz,
        '13hz idx' : idx_13hz, 
        '19hz idx' : idx_19hz, 
        '23hz idx' : idx_23hz, 
    }}
     

@app.route('/first')
def first_request():
    return {"first_lists": all_lines}

@app.route('/second')
def second_request():
    return {"second_lists": all_lines}

@app.route('/third')
def third_request():
    return {"third_lists": all_lines}

@app.route('/fourth')
def fourth_request():
    return {"fourth_lists": all_lines}

if __name__ == '__main__':
    app.run(debug=True)
