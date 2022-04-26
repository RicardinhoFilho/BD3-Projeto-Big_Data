/*APRESENTAÇÃO:*/


SELECT * FROM EQUIPAMENTOS WHERE TANK > 200;
/*scan 'equipamentos', {STARTROW=>'2', STOPROW=>'50', COLUMN=>'terreo',FILTER=>"SingleColumnValueFilter('terreo', 'tank', >=, 'binary:200')"}*/


select AVG(HELICOPTER) from EQUIPAMENTOS;
/*
scan 'equipamentos' , {COLUMNS => 'aereo:helicopter', LIMIT => 100, STARTROW => '1'}
*/

select AVG(HELICOPTER + AIRCRAFT)   from EQUIPAMENTOS;
/*

scan 'equipamentos' , {COLUMNS => 'aereo:helicopter',COLUMNS => 'aereo:aircraft', LIMIT => 100, STARTROW => '1'}
*/

SELECT EQUIPAMENTOS.dia as 'DIA DA GUERRA', RESUMO.DATA as 'DATA REAL' FROM EQUIPAMENTOS INNER JOIN RESUMO ON EQUIPAMENTOS.DIA = RESUMO.DIA 
WHERE RESUMO.dia = 5;
/*get 'resumo', '5'*/
/*get 'equipamentos', '5'*/


select month(RESUMO.Data ) as 'MÊS',sum(HELICOPTER) AS 'TOTAL' from EQUIPAMENTOS  
INNER JOIN RESUMO ON EQUIPAMENTOS.DIA = RESUMO.DIA  group by month(RESUMO.Data );









select * from EQUIPAMENTOS ;
