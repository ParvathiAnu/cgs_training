a=int(input("enter a number"))#0=0010
b=int(input("enter another number"))#1 0001
print("before swap", a,b)
a=a^b# 0010^0001=0011
b=a^b# 0011^0001=0010
a=a^b# 0011^0010=0001
print("after swap",a,b)
