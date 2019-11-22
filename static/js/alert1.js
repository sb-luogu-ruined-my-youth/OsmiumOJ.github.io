function alert1(elmt, cap, OKWrd, OKfunc, hasCancel, CancelWrd, txtAlgn) {
	$(".alert1Coverer").remove();
	cap = cap ? cap : "提&ensp;示";
	OKWrd = OKWrd ? OKWrd : "确&ensp;定";
	CancelWrd = CancelWrd ? CancelWrd : "取&ensp;消";
	txtAlgn = txtAlgn ? txtAlgn : "center";
	hasCancel = hasCancel ? hasCancel : false;
	$("body").append("<div class=\"alert1Coverer\"><div class=\"alert1Container\"><span style=\"font-size: 25px; color: #8787b4; text-shadow: 0px 0px 10px #aaaabb, 0px 0px 20px #aaaabb, 0px 0px 30px #aaaabb; text-weight: 600; margin-bottom: 7px;\">" + cap + "<\/span><div class=\"alert1\">" + elmt + "<\/div><button class=\"alert1Button\"id=\"alert1OK\">" + OKWrd + "<\/button>" + (hasCancel ? "<button class=\"alert1Button\"id=\"alert1Cancel\">" + CancelWrd + "<\/button><\/div>" : "<\/div><\/div>"));
	$(".alert1Container").css({
		backgroundColor: "rgba(255, 255, 255, 0.85)",
		padding: "20px",
		textAlign: "center",
		borderRadius: "20px",
		width: "65%",
		transitionDuration: "0.4s",
    });
	$(".alert1Container").hover(
		function() {
			$(this).css({
				boxShadow: "0px 0px 10px #aaaabb, 0px 0px 20px #aaaabb, 0px 0px 30px #aaaabb"
			});
		},
		function() {
			$(this).css({
				boxShadow: "0px 0px 7px #888899, 0px 0px 14px #888899, 0px 0px 21px #888899"
			});
		}
	);
	$(".alert1Coverer").css({
        position: "fixed",
		left: "0",
		right: "0",
		top: "0",
		bottom: "0",
		backgroundColor: "rgba(0, 0, 0, 0.4)",
		zIndex: "1048575",
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
    });
	$(".alert1").css({
		border: "2px solid #777765",
		textAlign: txtAlgn,
		textOverflow: "ellipsis",
		borderRadius: "7px",
		boxShadow: "0 3px 4px 0 rgba(0, 0, 0, 0.24), 0 3px 9px 0 rgba(0, 0, 0, 0.19)"
    });
	$(".alert1 h1").css({
		fontSize: "30px",
		color: "#483d8b",
		textShadow: "0px 0px 10px #aaaabb, 0px 0px 20px #aaaabb, 0px 0px 30px #aaaabb"
	});
	$(".alert1 h1").css({
		fontSize: "24px",
		color: "#483d8b",
		textShadow: "0px 0px 10px #aaaabb, 0px 0px 20px #aaaabb, 0px 0px 30px #aaaabb"
	});
	$(".alert1 h1").css({
		fontSize: "21px",
		color: "#483d8b",
		textShadow: "0px 0px 10px #aaaabb, 0px 0px 20px #aaaabb, 0px 0px 30px #aaaabb"
	});
	$(".alert1 h1").css({
		fontSize: "19px",
		color: "#483d8b",
		textShadow: "0px 0px 10px #aaaabb, 0px 0px 20px #aaaabb, 0px 0px 30px #aaaabb"
	});
	$(".alert1 h1").css({
		fontSize: "18px",
		color: "#483d8b",
		textShadow: "0px 0px 10px #aaaabb, 0px 0px 20px #aaaabb, 0px 0px 30px #aaaabb"
	});
	$(".alert1 h1").css({
		fontSize: "17px",
		color: "#483d8b",
		textShadow: "0px 0px 10px #aaaabb, 0px 0px 20px #aaaabb, 0px 0px 30px #aaaabb"
	});
	$(".alert1 a:link, .alert1 a:visited").css({
		color: "#6a5acd",
		textShadow: "0px 0px 7px #888899, 0px 0px 14px #888899, 0px 0px 21px #888899"
	});
	$(".alert1 a:hover, .alert1 a:active").css({
		color: "#7b68ee",
		textShadow: "0px 0px 10px #aaaabb, 0px 0px 20px #aaaabb, 0px 0px 30px #aaaabb"
	});
	$(".alert1 hr").css({
		border: "1px solid rgba(0, 0, 0, 0.2)"
	});
	$(".alert1Button").css({
		fontWeight: "400",
		outline: "medium",
		backgroundColor: "rgba(105, 105, 150, 0.7)",
		color: "#000000",
		border: "none",
		width: "100px",
		height: "40px",
		borderRadius: "20px",
		textAlign: "center",
		textDecoration: "none",
		display: "inline-block",
		fontSize: "16px",
		margin: "7px 3px 0 3px",
		cursor: "pointer",
		transitionDuration: "0.4s",
		boxShadow: "0 3px 4px 0 rgba(0, 0, 0, 0.24), 0 3px 9px 0 rgba(0, 0, 0, 0.19)"
	});
	$(".alert1Button").hover(
		function() {
			$(this).css({
				fontWeight: "600",
				backgroundColor: "#8787b4",
				boxShadow: "0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19)"
			});
		},
		function() {
			$(this).css({
				fontWeight: "400",
				backgroundColor: "rgba(105, 105, 150, 0.7)",
				boxShadow: "0 3px 4px 0 rgba(0, 0, 0, 0.24), 0 3px 9px 0 rgba(0, 0, 0, 0.19)"
			});
		}
	);
	$("#alert1OK").click(
		function() {
			$(".alert1Coverer").remove();
			eval(OKfunc);
		}
	);
	$("#alert1Cancel").click(
		function() {
			$(".alert1Coverer").remove();
		}
	);
}
window.alert = alert1;