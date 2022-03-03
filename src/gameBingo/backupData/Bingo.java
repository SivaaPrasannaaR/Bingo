import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Random;

public class BINGO {
	
	static Random r = new Random();		
	static int n =5, stnum=0;
	static int[][] p1 = new int[n][n];
	static int[][] p2 = new int[n][n];
	static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static int st , t , p1d1 =0 , p1d2 =0 , p2d1 =0 , p2d2 =0;
	static int flag;
	static int p1c =0 , p2c = 0 ; 
	static String bingo = "BINGO";
	static boolean d1 = false, d2 = false ;
	static int[] row1 = new int[n];
	static int[] col1 = new int[n];
	static int[] row2 = new int[n];
	static int[] col2 = new int[n];
	
	public static void main(String[] args) throws NumberFormatException, IOException {		
		
		Built(p1);
		Built(p2);
		
		ShowPlayerInfo();				// It is used to display the bingo table of the player
		
		for(int i =0 ; i <n*n ; i++) {
			
			GetStrikeNumber();		
			
			Strike(p1, st);
			Strike(p2, st);
						
			t=1;
			DiagonalCheck(p1,t);
			t=2;
			DiagonalCheck(p2,t);
			
			t=1;
			CheckRowAndColumForBingos(p1,t);
			t=2;
			CheckRowAndColumForBingos(p2,t);	
			
			
			ShowPlayerInfo();
			if( p1c == 5 )
				break;
			else if( p2c == 5 )
				break;
			else if( p1c == 5 && p2c == 5 )
				break;
		}	

	}

	private static void CheckRowAndColumForBingos(int[][] ck, int t) {
		
		for (int i = 0 , j= 0; i < n && j < n; i++ , j++) {            
            	
            	if( ck[0][j]  == 0 && ck[1][j]  == 0 && ck[2][j]  == 0 && ck[3][j]  == 0 && ck[4][j]  == 0  )
            		if( t == 1 && col1[j] == 0 )
            			col1[j] = 1;
            		else if( t == 2 && col2[j] == 0 )
            			col2[j] = 1;
            	
            	if( ck[i][0]  == 0 && ck[i][1]  == 0 && ck[i][2]  == 0 && ck[i][3]  == 0 && ck[i][4]  == 0 )
            		if( t == 1 && row1[j] == 0 )
            			row1[j] = 1;
            		else if( t == 2 && row2[j] == 0 )
            			row2[j] = 1;
            	
            }
        
		
		for (int i = 0; i < n; i++) {
			
			if( t==1) {
				if( row1[i] == 1 ) {
					row1[i] =2;
					p1c++;			
				}
				if( col1[i] == 1 ) {
					col1[i] = 2;
					p1c++;			
				}
			}	
			
			
			if( t== 2 ) {
				if( row2[i] == 1 ) {
					row2[i] =2;
					p2c++;			
				}
				if( col2[i] == 1 ) {
					col2[i] = 2;
					p2c++;			
				}
			}			
			
		}
		
	}

	private static void DiagonalCheck(int[][] cv , int t) {

		if( cv[0][0] == 0 && cv[1][1] == 0 && cv[2][2] == 0 && cv[3][3] == 0 && cv[4][4] == 0 )
			d1 = true;
		else 
			d1 =false;
		
		if( cv[0][4] == 0 && cv[1][3] == 0 && cv[2][2] == 0 && cv[3][1] == 0 && cv[4][0] == 0 )
			d2 = true;
		else 
			d2 =false;
		
		
		if( d1 && p1d1 == 0 && t==1) {
			p1d1 =1;
			p1c++;			
		}	
		
		if( d1 && p2d1 == 0 && t==2) {
			p2d1 =1;
			p2c++;			
		}
		
		if( d2 && p1d2 == 0 && t==1) {
			p1d2 =1;
			p1c++;			
		}			
		
		if( d2 && p2d2 == 0 && t==2 ) {
			p2d2 =1;
			p2c++;			
		}
	
	}

	private static void GetStrikeNumber() throws NumberFormatException, IOException {

		stnum++;
		int playerwhohastostrike;
		if(stnum%2==1)
			playerwhohastostrike = 1;
		else
			playerwhohastostrike = 2;
		
		System.out.println("\nPlayer " + playerwhohastostrike + " Enter the Number to Strike: ");
		
		st = Integer.parseInt(br.readLine());
		if(st > n*n) {	
			System.out.println(" Please Enter the Number Between 1 to "+ n*n );
			stnum--;
			GetStrikeNumber();
		}
		
	}
	
	private static int[][] Strike(int[][] strike, int st) {
		
		for(int i =0 ; i <n ; i++) 
			for(int j =0 ; j < n ; j++) 
				if(strike[i][j] == st) {
					strike[i][j] = 0;
					break;
				}
		
		return strike;		
	}

	private static int[][] Built(int[][] bp) {
		
		int check[] = new int[n*n];
		
		for(int emt = 0 ; emt < n*n ; emt++) 
			check[emt] = emt + 1;
		
		for(int i =0 ; i <n ; i++) 
			for(int j =0 ; j < n ; j++) 				
				bp[i][j] = Rad(check);		
				
				
		return bp;
	}
	
private static int Rad(int[] check) {	
		
		int k,dd,uni=0;			
		dd=n;	
			
		for(int i =0 ; i < dd ; i++) {
				
				k	=  r.nextInt(n*n);							
								
					if(check[k] != 0) {		
						uni = check[k];					
						check[k] = 0;
						break;
					}
					
					else
						dd++;										
			}
		return uni;
		
	}


private static void ShowPlayerInfo() {
	
//	It is used to display the table of the player
	
	System.out.println("\nPlayer 1\n");
	Show(p1);
	System.out.println("\nPlayer 2\n");
	Show(p2);
	
	System.out.println("\nPlayer  1  :  " + bingo.substring(0 , p1c));
	System.out.println("\nPlayer  2  :  " + bingo.substring(0 , p2c));
	
	if( p1c == 5 )
		System.out.println("\nPlayer  1 Won The Game \n");
	else if( p2c == 5 )
		System.out.println("\nPlayer  2 Won The Game \n");
	else if( p1c == 5 && p2c == 5 )
		System.out.println("\n Match Draw \n");
	
	
}

private static int[][] Show(int[][] sp) {
		
		for(int i =0 ; i < n ; i++) {
			for(int j =0 ; j < n ; j++) {
				
				System.out.print("\t"+sp[i][j]);
				
			}
			System.out.println();
		}
		return sp;		
	}
	

}





