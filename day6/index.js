async function getDataPart1() {
    const data = "stftmtvvtvqqczqqnjnwwlqqdzdnnsvnsswbbwsstvvssfjsjbjfjmjpjzpplpppjzjqqdzzhqqqqtcccbzzzwzrrrdqdldpdsppmqmmnwwjddnqqscclncllvhllqpllchhbccfcbcgbcgcfcncsnstsddldzldlmljjfbjbzbccmrmrppqmqsswbwqwdwwcnwwhrhppfsfvsvrrfllhglhlggjpggzjgzggnvvqfvvhffpwpmwpmmwvmvrmrbmbzmzbbvgbbcfbcfbfppnzpzrrszzqgzgjgddmdwmwrmwmzznqzqhqhvvsslppsrrljjfpfcpfpbbrjjwjmjpmpfmfzfvzfftptzzbmzmddpvdddqmmzjzbbhmmwqmmmbgmmttrhrqrvqvzvdvzdvvmsvmmqlmmtddvlvttrtvtvcttvssnwwbccqmmgbbqrqlqjllmslsmslltrtffzfpfzpffvwvffsllgvgtgwtwnttfzznzqzztfzfvzznnwzzcvcqvvdwwsnsvnnthhnphpssmjmfmhfmhmgmllmsmrsrrmmhsswjwqqdbbghhpsptsswvsvfvcffqcchlhfhvhjhdjhddvjjpmmsrsqrrngrrmvmsvsllrmlrlprpggqzqmmvlvvwrwnrwwzztrzrbrdbrdbbhlhchjchhtthpthphplhhlphpjjsddtppvbpbbmnmgnmmqbbrhhfrfpfjpjgjljcctwtmwtwvvvmsvmmnjmnjmnmqmvvggtzzctzttszsvvjwjqjmjbjvbbshbhghlghhpvpnvvqmmgjmmggqvqtvqtvqtvvmlljbbhdhshnnwqwbbrnnwswmwfmfttjztjzjsjzjdjbdjjzfzdzgzhghgpgqqdzdhhnwnjnnhrnrqqjsqsllbzzzcnzzmjmvmrvrgrfgrrqmrmpmpzmzqqfwqfwfjjhphgpptzzwmmfjjvbjvbbqsbsbcbppjzpjjzpjpvjjzdjjgcgppvrvjrjpjspjppntpnnjlnlrnrdndjnnsbnnppvspprbrddjrdrmrfmmtmtbtntftjjsscvcbvvcnccnbnrbbmlmddhpdptddmrmmjddnjjtztctqqhhttqctqtbbnfnwnmndnzzljlgltgltljtjllwjjbrjbrbpbgppmzpmpggdnnmznnhhmfhhssgtgvvlsljltlppdqqbtbvbsvsswbsbhsbsmmwswbbbbhvbvcbvvsvcsvvmfmlmgmjgmmbqbrbsrrgrsggldlmlttpbpmmtptctqcqvccnhnmnssmvsmmddlclpccfwfdfqfvqfvfqqwmmwrmmbzznpnllfttgcttnbtnnsswttfppnddpdpsphhpttnrtrlrsrmrnmmzhmhnmnwwddmhdhqqhbqqdcclnlfnnzfnzzqfqddczcqcrrjsrrswslltfltffjhhqqfcchqcqpplbltbblbcbncnpccdffcwwqzwqqlwwtjjpbbjvvljvjgvvrsszfsfcssqsvvwsvvdfvdfdpffztzrtzthzhhmwmzwzssjlsldsldsldlvvjdvvnbvnvmvmccvfcvcfcbchhzqqhgqqcbbhdbdpddwcdwwzszsfszzgbgdgzgvgsgnssfqsqjssrppsgppmmpzmppglgqlqqpzpqqfzzzrnzrnrqqzzfwzzffjfzzmnznpznpprhhvcvvvfddcrdrsscnnsznzszbznntwntnrnbnzzrnnlwlggnzzwppmbmrrncnlclzltlblhhlvhvphhsdhsdsqddgzgvvshvvzzbvbrrlplqpptplljcljlvjlvlqvvndnsdddmvddzhzjjgpjpddppzllwtwfwgfgpffmhhzllsttmqqhjhhpvpgpfjsgscnwjmwmtmptwlpfjljwgpgntrlpjfgbjqmcpzgfhrwmznqnsbpptbdrzmdtvvtdqjgrjzlphndhmlchvddglqnqsjqrfqslprsvlqjwqnsmsznptsstpvdntpttslpmqqbsdlqwpjqnzmpblgqmjrvqwsncnzdszgfsghddlnwhwzpgtddgstttvrjfjwwfrgsdjjngljqlqcrzlgsmwngbzvmjwtnqdqcgwmfhsztgrtvvfzbtstmdbqpntdpsszjthqvpbdwswfzvmrcpbgbgdmldfhvdpfsmdzfhwsrpcglsztdwqgbqszcqtqjhgntzvttldqsffftzmllptzhmhpmfsgcchfrnrchnsgcfjbgrqmvrmmhnmlnwtgwhznqfgwnlrqlpjrvfrgzcjwncvlwhpclfzngbgvmrmlzngmqlvvwhbpjzlclgrcnnvnlppqhvlrnpzvmtsbdpfbwgffgzfwvltcfvfdcnfhwvcvclwwbmshhmpgrzgltwjmqczpqzdwfjpqhmwqhvvgnpgtwrjrgwvhthtdrdpnwpbmwstgblwmbfvlwflqmfbcsgwstwvncwfcsmrpcfrrvmlbqhdtdswswfnzhgzlngwsrtlzfcgdppmjnghfrgbdqhqmslhcqddjvsslsjwqqznttqjzdlghnsvqqtwrpfbzjgwnrhhvlnbqmnvcpblzgbzltnrhzpdwvbqbtmctbzgsdjfzswrbqbzgvwjlwtmgcllnmnwcljbhbplpvtgpgjftfrbgpgmhghnjcgjfqmsbqhbgtzbfzgwmfdsgfgmgzsbgdrszfhjttbvcqjzjgbqfgswlmrrhnmnfrptvjtlnvplgznsljzfzmhghlsccnqzflfnmbhshfprhclmtfptcmtnhrjgnngnqnczvcgzzlntftjsbgpgwzbnrhzzfqmznqnzfrvjzsmtpjbswzjlbgpfftzrzbfgdblpwscbqjfrfmfnhhlhjprtlzzvwnwzsnqhnmgwsdprnrblgbclzhthftqzdljspwdzwmwhfmdzmlvqsngppdfsjdprbrhffcvcvzztjjqcffwbrvpzvzfzhjvsfvsnrmjvqmjtrjbmbqsdtjgvtbbzzfmnmrrflgcdtljpmpvqvdbzgbmhjgccgdtplllctzqpfqnsztbwdbmqgfzrcddtmwrgmwsghcfpgqssdjrtqhtjfbpjvjdnzgvpzrhbrhrhcmpbglbbrvdltdpsrwjbjzftccwgnqmnlqlpjwrfdvmlgvgqznlvsmpzsmgjstvqbqpprzlsdndpfbmqcrfgvcfvlfhmpfnnqlcqlnbbgcrrrhbtzwnwmfrnrzvgmqlmqnmnzbwflwzcmncphjqztlrzvpztqhptmfsrppvvlzcfnlrwptgccsjjjscjcwnzssmbcvtzhnscgsbrchbqbrtdzllfvmqfwznfzpzmbfwcdsfhdlddnfbdgqbqjqzdtppshwcvvcjqstdgtgbhmlqlrfrhbvfsszsmbldmwfnfgnjptdslnzwcjgmvbnqcfzjmrslrlllplbhpjcnvzmvrfzwqhmbnrvpqnvcfncgfwqlvcwpwwljssfmswctcmhgtphvjdpfnnzznfbdjcsndrczlgdjhrnrltsgbtqmqcbwlthwcgsbvqbnntcznczpmlmblwdrlmzqdztwsgjthjwtfcpgwbczmdmhttzcwvdzhdfldmwnbnfdcjgvjhrfltjnjhqhzmzrlbncwdnlgshmqhpgsdwbvmvjsfgvgqzqjqdzqzmfmrncfdgrqfrnstvpqwtltnhgrmhgmmnwvlnsfmmbjrdmrnlgfgpqncdpqgvjltpghbgffdppdcfhdqhtvrdnfvcttlrqppfnqtmzpfgsnmjqfrgtbbdzzrccsrzgfjndlrnzqmjjtgldglcpzcrhwfplvdndjtzbpfbbbpfljqnlvrdzbrvczzwdrvzlmslbjsqgqdrltmhwcdpldqldlpctcbjmsvdwlfspzlpgrhdrvjtprcwrmszvzwmmjgvsbfcztmrdgrgshgtggpzszgqhwmhdzjmzsgqsfmqvcgqqwgprgvvqlbfhpwsfbjdqtcfnfhsgzthzhbpwggbnscqbnvcdprsbgllsrdcclqggfgfdrpqlqljfwpmzdhthpczcsqrrm";
    let res;
    for (let i = 3; i < data.length; i++) {
        const letterLog = [];
        let isUnique = true;
        for (let j = i - 3; j <= i; j++) {
            if (letterLog.includes(data.charAt(j))) {
                isUnique = false;
            }
            letterLog.push(data.charAt(j))
        }
        if (isUnique) {
            res = i + 1;
            break;
        }

    }
    console.log(res);
}
async function getDataPart2() {
    const data = "stftmtvvtvqqczqqnjnwwlqqdzdnnsvnsswbbwsstvvssfjsjbjfjmjpjzpplpppjzjqqdzzhqqqqtcccbzzzwzrrrdqdldpdsppmqmmnwwjddnqqscclncllvhllqpllchhbccfcbcgbcgcfcncsnstsddldzldlmljjfbjbzbccmrmrppqmqsswbwqwdwwcnwwhrhppfsfvsvrrfllhglhlggjpggzjgzggnvvqfvvhffpwpmwpmmwvmvrmrbmbzmzbbvgbbcfbcfbfppnzpzrrszzqgzgjgddmdwmwrmwmzznqzqhqhvvsslppsrrljjfpfcpfpbbrjjwjmjpmpfmfzfvzfftptzzbmzmddpvdddqmmzjzbbhmmwqmmmbgmmttrhrqrvqvzvdvzdvvmsvmmqlmmtddvlvttrtvtvcttvssnwwbccqmmgbbqrqlqjllmslsmslltrtffzfpfzpffvwvffsllgvgtgwtwnttfzznzqzztfzfvzznnwzzcvcqvvdwwsnsvnnthhnphpssmjmfmhfmhmgmllmsmrsrrmmhsswjwqqdbbghhpsptsswvsvfvcffqcchlhfhvhjhdjhddvjjpmmsrsqrrngrrmvmsvsllrmlrlprpggqzqmmvlvvwrwnrwwzztrzrbrdbrdbbhlhchjchhtthpthphplhhlphpjjsddtppvbpbbmnmgnmmqbbrhhfrfpfjpjgjljcctwtmwtwvvvmsvmmnjmnjmnmqmvvggtzzctzttszsvvjwjqjmjbjvbbshbhghlghhpvpnvvqmmgjmmggqvqtvqtvqtvvmlljbbhdhshnnwqwbbrnnwswmwfmfttjztjzjsjzjdjbdjjzfzdzgzhghgpgqqdzdhhnwnjnnhrnrqqjsqsllbzzzcnzzmjmvmrvrgrfgrrqmrmpmpzmzqqfwqfwfjjhphgpptzzwmmfjjvbjvbbqsbsbcbppjzpjjzpjpvjjzdjjgcgppvrvjrjpjspjppntpnnjlnlrnrdndjnnsbnnppvspprbrddjrdrmrfmmtmtbtntftjjsscvcbvvcnccnbnrbbmlmddhpdptddmrmmjddnjjtztctqqhhttqctqtbbnfnwnmndnzzljlgltgltljtjllwjjbrjbrbpbgppmzpmpggdnnmznnhhmfhhssgtgvvlsljltlppdqqbtbvbsvsswbsbhsbsmmwswbbbbhvbvcbvvsvcsvvmfmlmgmjgmmbqbrbsrrgrsggldlmlttpbpmmtptctqcqvccnhnmnssmvsmmddlclpccfwfdfqfvqfvfqqwmmwrmmbzznpnllfttgcttnbtnnsswttfppnddpdpsphhpttnrtrlrsrmrnmmzhmhnmnwwddmhdhqqhbqqdcclnlfnnzfnzzqfqddczcqcrrjsrrswslltfltffjhhqqfcchqcqpplbltbblbcbncnpccdffcwwqzwqqlwwtjjpbbjvvljvjgvvrsszfsfcssqsvvwsvvdfvdfdpffztzrtzthzhhmwmzwzssjlsldsldsldlvvjdvvnbvnvmvmccvfcvcfcbchhzqqhgqqcbbhdbdpddwcdwwzszsfszzgbgdgzgvgsgnssfqsqjssrppsgppmmpzmppglgqlqqpzpqqfzzzrnzrnrqqzzfwzzffjfzzmnznpznpprhhvcvvvfddcrdrsscnnsznzszbznntwntnrnbnzzrnnlwlggnzzwppmbmrrncnlclzltlblhhlvhvphhsdhsdsqddgzgvvshvvzzbvbrrlplqpptplljcljlvjlvlqvvndnsdddmvddzhzjjgpjpddppzllwtwfwgfgpffmhhzllsttmqqhjhhpvpgpfjsgscnwjmwmtmptwlpfjljwgpgntrlpjfgbjqmcpzgfhrwmznqnsbpptbdrzmdtvvtdqjgrjzlphndhmlchvddglqnqsjqrfqslprsvlqjwqnsmsznptsstpvdntpttslpmqqbsdlqwpjqnzmpblgqmjrvqwsncnzdszgfsghddlnwhwzpgtddgstttvrjfjwwfrgsdjjngljqlqcrzlgsmwngbzvmjwtnqdqcgwmfhsztgrtvvfzbtstmdbqpntdpsszjthqvpbdwswfzvmrcpbgbgdmldfhvdpfsmdzfhwsrpcglsztdwqgbqszcqtqjhgntzvttldqsffftzmllptzhmhpmfsgcchfrnrchnsgcfjbgrqmvrmmhnmlnwtgwhznqfgwnlrqlpjrvfrgzcjwncvlwhpclfzngbgvmrmlzngmqlvvwhbpjzlclgrcnnvnlppqhvlrnpzvmtsbdpfbwgffgzfwvltcfvfdcnfhwvcvclwwbmshhmpgrzgltwjmqczpqzdwfjpqhmwqhvvgnpgtwrjrgwvhthtdrdpnwpbmwstgblwmbfvlwflqmfbcsgwstwvncwfcsmrpcfrrvmlbqhdtdswswfnzhgzlngwsrtlzfcgdppmjnghfrgbdqhqmslhcqddjvsslsjwqqznttqjzdlghnsvqqtwrpfbzjgwnrhhvlnbqmnvcpblzgbzltnrhzpdwvbqbtmctbzgsdjfzswrbqbzgvwjlwtmgcllnmnwcljbhbplpvtgpgjftfrbgpgmhghnjcgjfqmsbqhbgtzbfzgwmfdsgfgmgzsbgdrszfhjttbvcqjzjgbqfgswlmrrhnmnfrptvjtlnvplgznsljzfzmhghlsccnqzflfnmbhshfprhclmtfptcmtnhrjgnngnqnczvcgzzlntftjsbgpgwzbnrhzzfqmznqnzfrvjzsmtpjbswzjlbgpfftzrzbfgdblpwscbqjfrfmfnhhlhjprtlzzvwnwzsnqhnmgwsdprnrblgbclzhthftqzdljspwdzwmwhfmdzmlvqsngppdfsjdprbrhffcvcvzztjjqcffwbrvpzvzfzhjvsfvsnrmjvqmjtrjbmbqsdtjgvtbbzzfmnmrrflgcdtljpmpvqvdbzgbmhjgccgdtplllctzqpfqnsztbwdbmqgfzrcddtmwrgmwsghcfpgqssdjrtqhtjfbpjvjdnzgvpzrhbrhrhcmpbglbbrvdltdpsrwjbjzftccwgnqmnlqlpjwrfdvmlgvgqznlvsmpzsmgjstvqbqpprzlsdndpfbmqcrfgvcfvlfhmpfnnqlcqlnbbgcrrrhbtzwnwmfrnrzvgmqlmqnmnzbwflwzcmncphjqztlrzvpztqhptmfsrppvvlzcfnlrwptgccsjjjscjcwnzssmbcvtzhnscgsbrchbqbrtdzllfvmqfwznfzpzmbfwcdsfhdlddnfbdgqbqjqzdtppshwcvvcjqstdgtgbhmlqlrfrhbvfsszsmbldmwfnfgnjptdslnzwcjgmvbnqcfzjmrslrlllplbhpjcnvzmvrfzwqhmbnrvpqnvcfncgfwqlvcwpwwljssfmswctcmhgtphvjdpfnnzznfbdjcsndrczlgdjhrnrltsgbtqmqcbwlthwcgsbvqbnntcznczpmlmblwdrlmzqdztwsgjthjwtfcpgwbczmdmhttzcwvdzhdfldmwnbnfdcjgvjhrfltjnjhqhzmzrlbncwdnlgshmqhpgsdwbvmvjsfgvgqzqjqdzqzmfmrncfdgrqfrnstvpqwtltnhgrmhgmmnwvlnsfmmbjrdmrnlgfgpqncdpqgvjltpghbgffdppdcfhdqhtvrdnfvcttlrqppfnqtmzpfgsnmjqfrgtbbdzzrccsrzgfjndlrnzqmjjtgldglcpzcrhwfplvdndjtzbpfbbbpfljqnlvrdzbrvczzwdrvzlmslbjsqgqdrltmhwcdpldqldlpctcbjmsvdwlfspzlpgrhdrvjtprcwrmszvzwmmjgvsbfcztmrdgrgshgtggpzszgqhwmhdzjmzsgqsfmqvcgqqwgprgvvqlbfhpwsfbjdqtcfnfhsgzthzhbpwggbnscqbnvcdprsbgllsrdcclqggfgfdrpqlqljfwpmzdhthpczcsqrrm";
    let res;
    for (let i = 13; i < data.length; i++) {
        const letterLog = [];
        let isUnique = true;
        for (let j = i - 13; j <= i; j++) {
            if (letterLog.includes(data.charAt(j))) {
                isUnique = false;
            }
            letterLog.push(data.charAt(j))
        }
        if (isUnique) {
            res = i + 1;
            break;
        }

    }
    console.log(res);
}
getDataPart1();
